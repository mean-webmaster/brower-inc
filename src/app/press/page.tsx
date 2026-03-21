import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTABanner from "@/components/CTABanner";
import {
  SITE_NAME,
  SITE_URL,
  PHONE,
  PHONE_HREF,
  EMAIL,
  ADDRESS,
  SOCIAL,
  BUSINESS_HOURS,
  SERVICES,
} from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Press & Media Kit | Brower Inc.",
  description:
    "Official press release and media kit for Brower Inc. — Oklahoma's trusted portable restroom rental and septic services company. Download logos, company info, and brand assets.",
  alternates: { canonical: "/press" },
};

export default function PressPage() {
  const brandColors = [
    { name: "Brower Red", hex: "#E93D3D", textWhite: true },
    { name: "Brower Dark Red", hex: "#C62828", textWhite: true },
    { name: "Accent Green", hex: "#06B448", textWhite: true },
    { name: "Black", hex: "#000000", textWhite: true },
    { name: "White", hex: "#FFFFFF", textWhite: false },
  ];

  return (
    <>
      <Breadcrumbs items={[{ name: "Press & Media", href: "/press" }]} />

      {/* Hero */}
      <section className="relative bg-gray-900 py-20 sm:py-28">
        <Image
          src={IMAGES.fleetLineup}
          alt="Brower Inc. fleet of portable restroom delivery trucks and septic service vehicles"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Press &amp; Media Kit
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Everything journalists, partners, and media professionals need to tell the
              Brower Inc. story. Download brand assets, logos, and company information below.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* Company Overview */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Company Overview</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-600 leading-relaxed">
                Brower Inc. is a locally owned and operated portable sanitation company
                headquartered in Newkirk, Oklahoma. Founded by Troy Brower, the company
                provides reliable, clean portable restrooms, luxury VIP restroom trailers,
                hand washing stations, and professional septic services to communities and
                businesses throughout Oklahoma.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                From single-day events to multi-year construction projects, Brower Inc. has
                built a reputation for on-time delivery, meticulously maintained equipment,
                and genuine customer service. The company serves Kay County, Garfield County,
                Kingfisher County, Logan County, Woods County, and surrounding regions across
                the state.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Brower Inc. features the Maxim 300 portable restroom &mdash; available in
                blue, tan, and pink &mdash; as well as 18-station VIP restroom and shower
                trailers equipped with heat, air conditioning, running water, and superior
                LED lighting. The company also provides standalone hand washing stations,
                septic pumping and repair, aerobic system installation, and long-term rental
                programs with weekly servicing.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 p-6">
              <h3 className="text-lg font-bold text-gray-900">Quick Facts</h3>
              <dl className="mt-4 space-y-4">
                {[
                  { label: "Founded", value: "Newkirk, Oklahoma" },
                  { label: "Founder & Owner", value: "Troy Brower" },
                  { label: "Headquarters", value: ADDRESS.full },
                  { label: "Phone", value: PHONE },
                  { label: "Email", value: EMAIL },
                  { label: "Website", value: SITE_URL.replace("https://", "") },
                  { label: "Hours", value: BUSINESS_HOURS },
                  { label: "Service Area", value: "Statewide — Oklahoma" },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-gray-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-gray-200" />

        {/* Meet Troy Brower */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Meet the Founder</h2>
          <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row">
            <Image
              src={IMAGES.troyBrower}
              alt="Troy Brower, founder and owner of Brower Inc. in Newkirk, Oklahoma"
              width={280}
              height={280}
              className="h-70 w-70 shrink-0 rounded-2xl object-cover shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Troy Brower</h3>
              <p className="mt-1 text-sm font-semibold text-primary">Founder &amp; Owner</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Troy Brower is the founder and owner of Brower Inc. Based in Newkirk,
                Oklahoma, Troy built this business on a simple promise: provide clean,
                reliable portable sanitation and septic services that people can count on.
                From personally overseeing deliveries to making sure every unit is spotless,
                Troy takes pride in treating every customer like a neighbor &mdash; because
                most of them are.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Troy&apos;s hands-on approach and commitment to quality have made Brower Inc.
                one of Oklahoma&apos;s trusted portable sanitation providers. He and his team
                serve construction sites, weddings, community festivals, agricultural
                operations, and residential septic needs across the state.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {EMAIL}
                </a>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href={SOCIAL.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </a>
                <a
                  href={SOCIAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-gray-200" />

        {/* Brand Assets & Logos */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Brand Assets &amp; Logos</h2>
          <p className="mt-4 text-gray-600">
            Please use these official logos when referencing Brower Inc. in media coverage,
            partnerships, or publications. Do not alter, recolor, or distort the logos.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {/* Full Logo with Tagline */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50 p-4">
                <Image
                  src={IMAGES.logoFullTagline}
                  alt="Brower Inc. full logo with tagline and phone number"
                  width={280}
                  height={140}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">Full Logo with Tagline</p>
              <p className="mt-1 text-xs text-gray-500">Primary logo for print and web</p>
            </div>

            {/* Wordmark */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50 p-4">
                <Image
                  src={IMAGES.logoWordmarkFull}
                  alt="Brower Inc. wordmark logo"
                  width={280}
                  height={140}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">Wordmark</p>
              <p className="mt-1 text-xs text-gray-500">Text-based logo for headers and documents</p>
            </div>

            {/* Icon / B Mark */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 text-center">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50 p-4">
                <Image
                  src={IMAGES.logoIconBMark}
                  alt="Brower Inc. icon mark — B logo"
                  width={140}
                  height={140}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-gray-900">Icon Mark</p>
              <p className="mt-1 text-xs text-gray-500">Favicon, social profiles, and compact use</p>
            </div>
          </div>

          {/* Dark Background Variants */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-900 p-6 text-center">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-800 p-4">
                <Image
                  src={IMAGES.logoFullTagline}
                  alt="Brower Inc. full logo on dark background"
                  width={280}
                  height={140}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">On Dark Background</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-900 p-6 text-center">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-800 p-4">
                <Image
                  src={IMAGES.logoWordmarkFull}
                  alt="Brower Inc. wordmark on dark background"
                  width={280}
                  height={140}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">Wordmark on Dark</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-900 p-6 text-center">
              <div className="flex h-40 items-center justify-center rounded-lg bg-gray-800 p-4">
                <Image
                  src={IMAGES.logoIconBMark}
                  alt="Brower Inc. icon mark on dark background"
                  width={140}
                  height={140}
                  className="max-h-32 w-auto object-contain"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">Icon on Dark</p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-gray-200" />

        {/* Brand Colors & Typography */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Brand Colors &amp; Typography</h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Colors */}
            <div>
              <h3 className="text-lg font-bold text-gray-900">Color Palette</h3>
              <div className="mt-4 space-y-3">
                {brandColors.map((color) => (
                  <div key={color.hex} className="flex items-center gap-4">
                    <div
                      className="h-12 w-12 shrink-0 rounded-lg shadow-sm border border-gray-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{color.name}</p>
                      <p className="text-xs font-mono text-gray-500">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-lg font-bold text-gray-900">Typography</h3>
              <div className="mt-4 rounded-2xl bg-gray-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Primary Typeface</p>
                <p className="mt-2 text-4xl font-bold text-gray-900">Poppins</p>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Brower Inc. uses <span className="font-semibold">Poppins</span> as the
                  primary typeface across all digital and print materials. Available from
                  Google Fonts in weights 300 through 700.
                </p>
                <div className="mt-6 space-y-2">
                  <p className="text-sm font-light text-gray-700">Poppins Light (300)</p>
                  <p className="text-sm font-normal text-gray-700">Poppins Regular (400)</p>
                  <p className="text-sm font-medium text-gray-700">Poppins Medium (500)</p>
                  <p className="text-sm font-semibold text-gray-700">Poppins Semibold (600)</p>
                  <p className="text-sm font-bold text-gray-700">Poppins Bold (700)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-gray-200" />

        {/* Services Overview */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Services at a Glance</h2>
          <p className="mt-4 text-gray-600">
            Brower Inc. offers comprehensive portable sanitation solutions across Oklahoma.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.slug} className="rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-gray-200" />

        {/* Photo Gallery */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900">Photo Gallery</h2>
          <p className="mt-4 text-gray-600">
            High-resolution images available for media use. Please credit &ldquo;Brower
            Inc.&rdquo; when using these photos.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: IMAGES.fleetLineup, alt: "Brower Inc. full fleet lineup", caption: "Full Fleet" },
              { src: IMAGES.troyBrower, alt: "Troy Brower, founder", caption: "Troy Brower — Founder" },
              { src: IMAGES.portableRestroomHero, alt: "Portable restroom lineup", caption: "Portable Restrooms" },
              { src: IMAGES.vipExteriorSide, alt: "VIP restroom trailer exterior", caption: "VIP Trailer Exterior" },
              { src: IMAGES.vipInteriorVanity, alt: "VIP trailer interior", caption: "VIP Trailer Interior" },
              { src: IMAGES.handWashingStation, alt: "Hand washing station", caption: "Hand Washing Station" },
              { src: IMAGES.septicTruckRear, alt: "Septic pump truck", caption: "Septic Service Truck" },
              { src: IMAGES.deliveryDaytime, alt: "Delivery truck on the road", caption: "Delivery in Action" },
              { src: IMAGES.rodeoEvent, alt: "VIP trailer at rodeo event", caption: "Rodeo Event Setup" },
            ].map((photo) => (
              <div key={photo.caption} className="group overflow-hidden rounded-xl border border-gray-200">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="px-4 py-3 text-sm font-medium text-gray-700">{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <hr className="my-16 border-gray-200" />

        {/* Media Contact */}
        <section>
          <div className="rounded-2xl bg-gray-50 p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Media Contact</h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  For press inquiries, interview requests, or additional information, please
                  contact us directly. We are happy to provide quotes, schedule photo
                  opportunities, and share additional company details.
                </p>
                <dl className="mt-8 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Contact</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900">Troy Brower, Owner</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone</dt>
                    <dd className="mt-1">
                      <a href={PHONE_HREF} className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                        {PHONE}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email</dt>
                    <dd className="mt-1">
                      <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Website</dt>
                    <dd className="mt-1">
                      <a href={SITE_URL} className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                        {SITE_URL.replace("https://", "")}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-500">Mailing Address</dt>
                    <dd className="mt-1 text-sm font-medium text-gray-900">{ADDRESS.full}</dd>
                  </div>
                </dl>
              </div>
              <div className="flex flex-col justify-center">
                <div className="rounded-xl bg-white p-8 shadow-sm border border-gray-200 text-center">
                  <Image
                    src={IMAGES.logoFullTagline}
                    alt="Brower Inc. logo"
                    width={300}
                    height={150}
                    className="mx-auto max-h-24 w-auto object-contain"
                  />
                  <p className="mt-6 text-sm text-gray-500">
                    {SITE_NAME} &mdash; {ADDRESS.full}
                  </p>
                  <p className="mt-1 text-sm font-medium text-primary">{PHONE}</p>
                  <div className="mt-6 flex justify-center gap-4">
                    <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-primary transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900">Brand Usage Guidelines</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-green-800">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Do
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-green-700">
                <li>Use the official logos provided above</li>
                <li>Maintain clear space around the logo</li>
                <li>Use &ldquo;Brower Inc.&rdquo; (with period) in written references</li>
                <li>Credit &ldquo;Brower Inc.&rdquo; when using company photos</li>
                <li>Use the official brand colors for consistency</li>
                <li>Link to <span className="font-medium">browerinc.net</span> when referencing online</li>
              </ul>
            </div>
            <div className="rounded-xl border border-red-200 bg-red-50 p-6">
              <h3 className="flex items-center gap-2 font-semibold text-red-800">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Don&apos;t
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-red-700">
                <li>Alter, rotate, or distort the logo</li>
                <li>Change the logo colors</li>
                <li>Place the logo on busy or cluttered backgrounds</li>
                <li>Use low-resolution versions of the logo</li>
                <li>Abbreviate as &ldquo;BI&rdquo; without context</li>
                <li>Imply endorsement without written permission</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <CTABanner
        title="Have Questions? Get in Touch"
        description="Whether you need a quote, want to schedule an interview, or have questions about our services, we're here to help."
      />
    </>
  );
}
