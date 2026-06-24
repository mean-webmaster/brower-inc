"""Recover the 8 already-generated blog cover images from kie.ai by their taskIds.

The first run submitted + completed 8 jobs but failed at download (Cloudflare 403).
This script re-pulls the result URLs and downloads with a proper User-Agent.
"""

import json
import urllib.request
from pathlib import Path

API_KEY = "2ec2079ee0c4fa694a787bbfa5887ee3"
BASE = "https://api.kie.ai"

TASKS = [
    ("porta-potty-rental-near-me-rural-oklahoma",
     "6fc0bddd64cd7e7eb266c1fbbaf6878c",
     "brower-inc-porta-potty-rental-near-me-rural-oklahoma-blog-cover-v2-newkirk-ok.jpeg"),
    ("event-planning-restroom-guide",
     "b6956fd78f1b6646ba78f887e216c647",
     "brower-inc-event-planning-restroom-guide-blog-cover-newkirk-ok.jpeg"),
    ("septic-system-maintenance-oklahoma",
     "9965f443551606df5024683f0f17f624",
     "brower-inc-septic-system-maintenance-oklahoma-blog-cover-newkirk-ok.jpeg"),
    ("oil-gas-portable-sanitation-oklahoma",
     "399936932a922af07c12878e9f00a8ff",
     "brower-inc-oil-gas-portable-sanitation-oklahoma-blog-cover-newkirk-ok.jpeg"),
    ("how-clean-are-portable-restrooms",
     "e5143b5777b3801a09cc7796b8520e69",
     "brower-inc-how-clean-are-portable-restrooms-blog-cover-newkirk-ok.jpeg"),
    ("construction-site-sanitation-tips",
     "c5c613d9345015fe4885843d7b3523ac",
     "brower-inc-construction-site-sanitation-tips-blog-cover-newkirk-ok.jpeg"),
    ("portable-restroom-rental-guide",
     "0e1261c5df73476a9f869f1181389e18",
     "brower-inc-portable-restroom-rental-guide-blog-cover-newkirk-ok.jpeg"),
    ("porta-potty-rental-cost-oklahoma",
     "5e8c2735411ad525e944ec9e71fb47f5",
     "brower-inc-porta-potty-rental-cost-oklahoma-blog-cover-v2-newkirk-ok.jpeg"),
]

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
)


def get_record(task_id):
    req = urllib.request.Request(
        f"{BASE}/api/v1/jobs/recordInfo?taskId={task_id}",
        headers={"Authorization": f"Bearer {API_KEY}"},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))


def extract_url(data):
    """Extract first generated image URL from a recordInfo data block."""
    if not isinstance(data, dict):
        return None
    # data may have resultJson as a JSON string
    rj = data.get("resultJson")
    if isinstance(rj, str):
        try:
            rj = json.loads(rj)
        except Exception:
            rj = None
    candidates = []
    for src in (rj, data.get("result"), data):
        if isinstance(src, dict):
            for key in ("resultUrls", "imageUrls", "images", "urls"):
                v = src.get(key)
                if isinstance(v, list) and v:
                    candidates.extend(v)
            for key in ("imageUrl", "url"):
                v = src.get(key)
                if isinstance(v, str):
                    candidates.append(v)
    for c in candidates:
        if isinstance(c, str) and c.startswith("http"):
            return c
        if isinstance(c, dict) and isinstance(c.get("url"), str):
            return c["url"]
    return None


def download(url, out_path):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "image/avif,image/webp,image/jpeg,image/png,*/*",
            "Referer": "https://kie.ai/",
        },
    )
    with urllib.request.urlopen(req, timeout=120) as r, open(out_path, "wb") as f:
        f.write(r.read())


def main():
    here = Path(__file__).resolve().parent.parent
    images_dir = here / "public" / "images"

    for slug, task_id, filename in TASKS:
        info = get_record(task_id)
        data = info.get("data") or {}
        url = extract_url(data)
        if not url:
            print(f"[FAIL] {slug}  no URL found.  raw={json.dumps(data)[:400]}")
            continue
        out = images_dir / filename
        download(url, out)
        print(f"[OK]   {slug}  ->  {out.name}  ({out.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
