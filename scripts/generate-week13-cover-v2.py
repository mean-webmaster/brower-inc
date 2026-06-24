"""Regenerate ONLY the Week 13 (Local vs National) cover with cleaner unit framing.

v1 placed the unit on the flatbed at an angle and the model distorted it slightly.
v2 stages two pristine standing units beside the parked truck in a closer 3/4 view so
the units render large and crisp, still matching the real product exactly.

Run from the brower-inc directory:

    python scripts/generate-week13-cover-v2.py
"""

import json
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path

API_KEY = "2ec2079ee0c4fa694a787bbfa5887ee3"
BASE = "https://api.kie.ai"
HEADERS = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

PRODUCT_REF_URL = (
    "https://browerinc.net/images/"
    "brower-inc-service-truck-portable-restroom-delivery-daytime-newkirk-ok.webp"
)
STYLE_REF_URL = (
    "https://browerinc.net/images/"
    "brower-inc-osha-portable-restroom-requirements-construction-oklahoma-blog-cover-newkirk-ok.webp"
)

UNIT = (
    "The portable restroom units must look EXACTLY like the real blue units in "
    "reference image #1: bright royal-blue plastic walls, a slightly darker navy-blue "
    "gabled/domed roof, a translucent roof vent, a recessed door latch, and a small "
    "oval Brower company logo decal mounted high-center on the door. Render them crisp, "
    "upright, undistorted and structurally correct. Do NOT add any red cursive wordmark, "
    "phone number, or extra text to the unit doors. "
)
NEG = (
    "Do NOT add captions, watermarks, sky text, or invented branding. Photorealistic "
    "editorial photography, 16:9 wide landscape blog-cover composition, sharp focus."
)

JOB = {
    "slug": "local-vs-national-portable-restroom-providers-oklahoma",
    "filename": "brower-inc-local-vs-national-portable-restroom-providers-oklahoma-blog-cover-newkirk-ok.jpeg",
    "prompt": (
        "A warm, picturesque medium-wide photograph at golden hour on a rural "
        "north-central Oklahoma roadside. A white Brower Inc. flatbed service truck "
        "(black flatbed bed) is parked at the right, and just beside it on the grass two "
        "pristine bright royal-blue Brower Inc. portable restrooms stand upright and "
        "freshly delivered, rendered large and clearly in the foreground left-of-center. "
        "Wide open green-and-gold Oklahoma ranchland rolls to the horizon under a big warm "
        "sky, with a weathered red barn and a tall grain elevator in the soft-focus distance. "
        "Long warm-amber shadows, lush rural atmosphere — the feel of a trusted local, "
        "owner-operated Oklahoma company that delivers where national chains won't. "
        "Cinematic golden-hour color grading, deep depth of field. " + UNIT + NEG
    ),
}


def http_post(url, body):
    req = urllib.request.Request(url, data=json.dumps(body).encode(), headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode())


def http_get(url):
    req = urllib.request.Request(url, headers=HEADERS, method="GET")
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode())


def main():
    body = {
        "model": "google/nano-banana-edit",
        "input": {
            "prompt": JOB["prompt"],
            "image_urls": [PRODUCT_REF_URL, STYLE_REF_URL],
            "output_format": "jpeg",
            "image_size": "16:9",
        },
    }
    res = http_post(f"{BASE}/api/v1/jobs/createTask", body)
    if res.get("code") != 200:
        raise RuntimeError(f"createTask failed: {res}")
    tid = res["data"]["taskId"]
    print(f"[submit] {tid}", flush=True)

    deadline = time.time() + 600
    image_url = None
    last = None
    while time.time() < deadline:
        data = (http_get(f"{BASE}/api/v1/jobs/recordInfo?taskId={tid}").get("data") or {})
        state = data.get("state") or data.get("status") or data.get("taskStatus")
        if state != last:
            print(f"[poll] state={state}", flush=True)
            last = state
        if state in ("success", "completed", "SUCCESS", "COMPLETED"):
            result = data.get("resultJson") or data.get("result") or data
            if isinstance(result, str):
                try:
                    result = json.loads(result)
                except Exception:
                    pass
            urls = (result or {}).get("resultUrls") or (result or {}).get("imageUrls") or (result or {}).get("images") or []
            image_url = urls[0] if urls else data.get("imageUrl")
            break
        if state in ("fail", "failed", "FAIL", "FAILED", "error", "ERROR"):
            raise RuntimeError(f"task failed: {data}")
        time.sleep(6)
    if not image_url:
        raise TimeoutError("no image url")

    # Save as a -v2 file so we can compare before replacing v1.
    here = Path(__file__).resolve().parent.parent
    out = here / "public" / "images" / JOB["filename"].replace(".jpeg", "-v2.jpeg")
    req = urllib.request.Request(
        image_url,
        headers={
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
            "Accept": "image/avif,image/webp,image/jpeg,image/png,*/*",
            "Referer": "https://kie.ai/",
        },
    )
    with urllib.request.urlopen(req, timeout=120) as r, open(out, "wb") as f:
        f.write(r.read())
    print(f"[save] {out.name}", flush=True)


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"HTTPError {e.code}: {e.read().decode('utf-8', 'replace')}\n")
        sys.exit(1)
