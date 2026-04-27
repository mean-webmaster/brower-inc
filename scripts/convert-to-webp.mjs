import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";

const TARGETS = [process.argv[2] || "public/images"];
const SKIP = new Set(["favicon.png", "apple-icon.png", "apple-touch-icon.png"]);
const EXT = /\.(png|jpe?g|tiff?|bmp)$/i;
const QUALITY = Number(process.env.WEBP_QUALITY ?? 85);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function convert(file) {
  const base = path.basename(file);
  if (SKIP.has(base) || !EXT.test(base)) return null;
  const out = file.replace(EXT, ".webp");
  const before = (await stat(file)).size;
  await sharp(file).webp({ quality: QUALITY, effort: 6 }).toFile(out);
  const after = (await stat(out)).size;
  await unlink(file);
  return { file, out, before, after };
}

const kb = (n) => (n / 1024).toFixed(1) + "KB";

for (const target of TARGETS) {
  const files = await walk(target);
  let saved = 0;
  for (const f of files) {
    try {
      const r = await convert(f);
      if (!r) continue;
      const pct = (((r.before - r.after) / r.before) * 100).toFixed(0);
      saved += r.before - r.after;
      console.log(`${path.relative(process.cwd(), r.file)} → ${path.basename(r.out)}  ${kb(r.before)} → ${kb(r.after)} (-${pct}%)`);
    } catch (err) {
      console.error(`FAIL ${f}: ${err.message}`);
    }
  }
  console.log(`\nTotal saved in ${target}: ${kb(saved)}`);
}
