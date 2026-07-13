// Upload the July 13 2026 blog images (cover + hero for both posts) to the
// GoHighLevel media library. GHL rejects .webp uploads, so we render a temporary
// .jpg from each .webp, upload that, then delete the temp file. The site keeps
// using the .webp files in public/images.

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const TOKEN = "pit-93de640d-9138-4d6b-a2a4-ca3768d5eb45";
const LOCATION_ID = "Vil2untX5HPYLFH0yUEi";
const ENDPOINT = "https://services.leadconnectorhq.com/medias/upload-file";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const IMG_DIR = path.join(ROOT, "public", "images");

const COVERS = [
  "brower-inc-septic-tank-never-pumped-oklahoma-blog-cover-newkirk-ok",
  "brower-inc-septic-tank-never-pumped-oklahoma-blog-hero-newkirk-ok",
  "brower-inc-porta-potty-smells-like-ammonia-summer-oklahoma-blog-cover-newkirk-ok",
  "brower-inc-porta-potty-smells-like-ammonia-summer-oklahoma-blog-hero-newkirk-ok",
];

async function makeJpg(stem) {
  const src = path.join(IMG_DIR, `${stem}.webp`);
  const tmp = path.join(IMG_DIR, `${stem}.jpg`);
  await sharp(src).jpeg({ quality: 88, mozjpeg: true }).toFile(tmp);
  return tmp;
}

async function uploadOne(stem) {
  const tmpPath = await makeJpg(stem);
  const buf = fs.readFileSync(tmpPath);
  const fd = new FormData();
  fd.append("file", new Blob([buf], { type: "image/jpeg" }), `${stem}.jpg`);
  fd.append("locationId", LOCATION_ID);
  fd.append("name", stem);

  const r = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Version: "2021-07-28",
      Accept: "application/json",
    },
    body: fd,
  });
  const text = await r.text();
  fs.unlinkSync(tmpPath);

  let body;
  try {
    body = JSON.parse(text);
  } catch {
    body = { raw: text };
  }
  return { stem, status: r.status, body };
}

const results = await Promise.all(COVERS.map((s) => uploadOne(s)));
for (const { stem, status, body } of results) {
  if (status >= 200 && status < 300) {
    const url = body?.url || body?.fileUrl || body?.data?.url || "(no url)";
    console.log(`[OK ${status}] ${stem}\n         ${url}`);
  } else {
    console.log(`[FAIL ${status}] ${stem}\n         ${JSON.stringify(body).slice(0, 240)}`);
  }
}
