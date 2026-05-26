"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { motion } from "framer-motion";
import { SERVICE_COUNTIES, type CountyInfo } from "./counties";

interface MapProps {
  onCountyClick: (county: CountyInfo) => void;
}

export default function InteractiveMap({ onCountyClick }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredCounty, setHoveredCounty] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const geoResponse = await fetch(
          "https://raw.githubusercontent.com/plotly/datasets/master/geojson-counties-fips.json"
        );
        const geoData = await geoResponse.json();

        const serviceFips = SERVICE_COUNTIES.map((c) => c.fips);
        const filteredFeatures = geoData.features.filter((f: any) =>
          serviceFips.includes(f.id)
        );

        if (!svgRef.current) return;

        const width = 800;
        const height = 600;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const projection = d3
          .geoAlbers()
          .rotate([98, 0])
          .center([0, 38])
          .fitSize([width, height], {
            type: "FeatureCollection",
            features: filteredFeatures,
          });

        const path = d3.geoPath().projection(projection);

        const g = svg.append("g");
        const pathsGroup = g.append("g").attr("class", "paths-group");
        const labelsGroup = g.append("g").attr("class", "labels-group");

        // Draw counties
        pathsGroup
          .selectAll("path")
          .data(filteredFeatures)
          .enter()
          .append("path")
          .attr("d", path as any)
          .attr("fill", (d: any) => {
            const county = SERVICE_COUNTIES.find((c) => c.fips === d.id);
            return county?.colorHex || "#e5e7eb";
          })
          .attr("stroke", "#ffffff")
          .attr("stroke-width", 2)
          .style("cursor", "pointer")
          .style("transition", "opacity 0.2s ease")
          .attr("id", (d: any) => `county-${d.id}`)
          .on("mouseenter", function (_event: any, d: any) {
            const county = SERVICE_COUNTIES.find((c) => c.fips === d.id);
            if (county) {
              setHoveredCounty(county.id);
              d3.select(this)
                .transition()
                .duration(200)
                .attr("fill", county.hoverHex)
                .style("filter", "drop-shadow(0 4px 6px rgba(0,0,0,0.15))");
              this.parentNode?.appendChild(this);
            }
          })
          .on("mouseleave", function (_event: any, d: any) {
            const county = SERVICE_COUNTIES.find((c) => c.fips === d.id);
            setHoveredCounty(null);
            d3.select(this)
              .transition()
              .duration(200)
              .attr("fill", county?.colorHex || "#e5e7eb")
              .style("filter", "none");
          })
          .on("click", (_event: any, d: any) => {
            const county = SERVICE_COUNTIES.find((c) => c.fips === d.id);
            if (county) onCountyClick(county);
          });

        // State border line (KS/OK border ~37°N latitude)
        const borderGroup = g.append("g").attr("class", "border-group");
        const borderLon1 = projection([-99.5, 37]);
        const borderLon2 = projection([-95.5, 37]);
        if (borderLon1 && borderLon2) {
          borderGroup
            .append("line")
            .attr("x1", borderLon1[0])
            .attr("y1", borderLon1[1])
            .attr("x2", borderLon2[0])
            .attr("y2", borderLon2[1])
            .attr("stroke", "#374151")
            .attr("stroke-width", 3)
            .attr("stroke-dasharray", "8,4")
            .style("pointer-events", "none");

          // "KANSAS" label above the border
          borderGroup
            .append("text")
            .attr("x", (borderLon1[0] + borderLon2[0]) / 2)
            .attr("y", borderLon1[1] - 14)
            .attr("text-anchor", "middle")
            .attr("fill", "#374151")
            .attr("font-size", "14px")
            .attr("font-weight", "800")
            .attr("letter-spacing", "4px")
            .style("pointer-events", "none")
            .text("KANSAS");

          // "OKLAHOMA" label below the border
          borderGroup
            .append("text")
            .attr("x", (borderLon1[0] + borderLon2[0]) / 2)
            .attr("y", borderLon1[1] + 24)
            .attr("text-anchor", "middle")
            .attr("fill", "#374151")
            .attr("font-size", "14px")
            .attr("font-weight", "800")
            .attr("letter-spacing", "4px")
            .style("pointer-events", "none")
            .text("OKLAHOMA");
        }

        // County labels
        labelsGroup
          .selectAll("text")
          .data(filteredFeatures)
          .enter()
          .append("text")
          .attr("x", (d: any) => path.centroid(d)[0])
          .attr("y", (d: any) => path.centroid(d)[1])
          .attr("text-anchor", "middle")
          .attr("fill", "#1f2937")
          .attr("font-size", "10px")
          .attr("font-weight", "700")
          .attr("letter-spacing", "-0.5px")
          .attr("text-transform", "uppercase")
          .style("pointer-events", "none")
          .text((d: any) => {
            const county = SERVICE_COUNTIES.find((c) => c.fips === d.id);
            return county?.name || "";
          });

        setLoading(false);
      } catch (error) {
        console.error("Error loading map:", error);
        setLoading(false);
      }
    };

    loadMap();
  }, [onCountyClick]);

  return (
    <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50/80 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-500 font-medium animate-pulse">
              Loading Service Area...
            </p>
          </div>
        </div>
      )}

      <svg ref={svgRef} viewBox="0 0 800 600" className="w-full h-full" />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
        <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl border border-gray-200 shadow-lg">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-red-300" />
            <span className="text-xs font-bold text-gray-900">
              Home Base (Kay County)
            </span>
          </div>
          <p className="text-[10px] text-gray-500">
            Click a county to view details
          </p>
        </div>

        {hoveredCounty && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl max-w-xs pointer-events-none"
          >
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
              {SERVICE_COUNTIES.find((c) => c.id === hoveredCounty)?.name}{" "}
              County,{" "}
              {SERVICE_COUNTIES.find((c) => c.id === hoveredCounty)?.state}
            </p>
            <p className="text-sm font-medium leading-tight">
              {SERVICE_COUNTIES.find(
                (c) => c.id === hoveredCounty
              )?.cities.join(", ")}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
