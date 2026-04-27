"""Resize + compress PNG logos from GHL to ≤1000px wide and ≤150KB.
Preserves transparency (critical for logos on colored backgrounds).
"""
from PIL import Image
from pathlib import Path
import io

SRC_DIR = Path("public/images/_ghl_originals")
OUT_DIR = Path("public/images")
MAX_WIDTH = 1000
MAX_BYTES = 150 * 1024  # 150 KB

def compress_png(src: Path, dst: Path):
    img = Image.open(src)
    # Ensure RGBA so transparency survives
    if img.mode not in ("RGBA", "LA", "P"):
        img = img.convert("RGBA")

    w, h = img.size
    if w > MAX_WIDTH:
        ratio = MAX_WIDTH / w
        img = img.resize((MAX_WIDTH, int(h * ratio)), Image.LANCZOS)

    # Quantize to reduce palette/size while keeping alpha
    # Start at 256 colors, drop until under MAX_BYTES
    for colors in (256, 192, 128, 96, 64, 48, 32):
        q = img.convert("RGBA").quantize(colors=colors, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.FLOYDSTEINBERG)
        buf = io.BytesIO()
        q.save(buf, format="PNG", optimize=True, compress_level=9)
        data = buf.getvalue()
        if len(data) <= MAX_BYTES:
            dst.write_bytes(data)
            return len(data), img.size, colors
    # Fallback: save smallest attempt
    dst.write_bytes(data)
    return len(data), img.size, colors

for src in sorted(SRC_DIR.glob("*.png")):
    dst = OUT_DIR / src.name
    size, dims, colors = compress_png(src, dst)
    print(f"{src.name}: {dims[0]}x{dims[1]} @ {colors} colors -> {size/1024:.1f} KB")
