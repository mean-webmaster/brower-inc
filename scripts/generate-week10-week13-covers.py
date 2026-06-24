"""Generate Week 10 + Week 13 Brower Inc. blog covers via kie.ai Nano Banana.

Key difference from earlier cover scripts: the PRIMARY reference image is a REAL
Brower Inc. product photo (the white flatbed service truck hauling the actual blue
units), so the generated units match the real product exactly — bright royal-blue
walls, dark navy domed roof, small oval Brower "B" logo decal on the door. No fake
red cursive wordmark or phone decal on the unit doors (that red script lives on the
septic vacuum truck, not the porta potties).

Run from the brower-inc directory:

    python scripts/generate-week10-week13-covers.py
"""

import json
import os
import sys
import time
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

API_KEY = "2ec2079ee0c4fa694a787bbfa5887ee3"
BASE = "https://api.kie.ai"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
}

# REAL Brower product photo — white Ram flatbed + two actual blue units.
# This is reference image #1: the model must replicate these exact units.
PRODUCT_REF_URL = (
    "https://browerinc.net/images/"
    "brower-inc-service-truck-portable-restroom-delivery-daytime-newkirk-ok.webp"
)
# A live, well-graded existing cover used purely as a photographic-quality reference.
STYLE_REF_URL = (
    "https://browerinc.net/images/"
    "brower-inc-osha-portable-restroom-requirements-construction-oklahoma-blog-cover-newkirk-ok.webp"
)

# Accurate description of the REAL unit — reused in both prompts.
UNIT = (
    "The portable restroom units must look EXACTLY like the real blue units in "
    "reference image #1: bright royal-blue plastic walls, a slightly darker navy-blue "
    "gabled/domed roof, a translucent roof vent, a recessed door latch, and a small "
    "oval Brower company logo decal mounted high-center on the door. Do NOT add any "
    "red cursive wordmark, phone number, or extra text to the unit doors — keep them "
    "clean and identical to the real product. "
)
NEG = (
    "Do NOT add any captions, watermarks, sky text, logos in the corners, or invented "
    "branding. Photorealistic editorial photography, 16:9 wide landscape blog-cover "
    "composition, sharp focus, natural depth of field."
)

JOBS = [
    # ── Week 10 — Emergency Portable Restroom Deployment / Disaster Response ──
    {
        "slug": "emergency-portable-restroom-deployment-oklahoma",
        "filename": "brower-inc-emergency-portable-restroom-deployment-oklahoma-blog-cover-newkirk-ok.jpeg",
        "prompt": (
            "A cinematic wide photograph of an Oklahoma storm-disaster response staging "
            "area in the dramatic clearing light right after a severe storm has passed. "
            "In the foreground, a row of four freestanding bright royal-blue Brower Inc. "
            "portable restrooms is being deployed on a compacted gravel staging lot, with "
            "one white Brower Inc. flatbed service truck (black flatbed bed) parked at the "
            "right having just unloaded them. A few snapped tree limbs and scattered storm "
            "debris lie at the edges of the lot; in the soft-focus background, emergency "
            "and utility response vehicles with amber work lights are staged near a damaged "
            "tree line. The sky is dramatic and turbulent — heavy gray storm clouds breaking "
            "open with shafts of bright sunlight punching through, cooler blue-gray tones "
            "with warm highlights. Wet ground reflecting the broken light. A strong sense of "
            "rapid, organized emergency mobilization. " + UNIT + NEG
        ),
    },
    # ── Week 13 — Local vs. National Providers / Owner-Operated Oklahoma ──
    {
        "slug": "local-vs-national-portable-restroom-providers-oklahoma",
        "filename": "brower-inc-local-vs-national-portable-restroom-providers-oklahoma-blog-cover-newkirk-ok.jpeg",
        "prompt": (
            "A warm, picturesque photograph of a single white Brower Inc. flatbed service "
            "truck (black flatbed bed) hauling two bright royal-blue Brower Inc. portable "
            "restrooms, parked on a rural north-central Oklahoma gravel road at golden hour. "
            "Wide open green-and-gold Oklahoma ranchland stretches to the horizon under a big "
            "warm sky, with a weathered red barn and a tall grain elevator far in the soft-focus "
            "distance. Long warm-amber shadows across the grass, lush rural atmosphere — the feel "
            "of a trusted local, owner-operated Oklahoma company that delivers where the national "
            "chains won't. Cinematic golden-hour color grading, deep depth of field. " + UNIT + NEG
        ),
    },
]


def http_post(url, body):
    req = urllib.request.Request(
        url, data=json.dumps(body).encode("utf-8"), headers=HEADERS, method="POST"
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode("utf-8"))


def http_get(url):
    req = urllib.request.Request(url, headers=HEADERS, method="GET")
    with urllib.request.urlopen(req, timeout=60) as resp:
        return json.loads(resp.read().decode("utf-8"))


def submit(job):
    body = {
        "model": "google/nano-banana-edit",
        "input": {
            "prompt": job["prompt"],
            "image_urls": [PRODUCT_REF_URL, STYLE_REF_URL],
            "output_format": "jpeg",
            "image_size": "16:9",
        },
    }
    res = http_post(f"{BASE}/api/v1/jobs/createTask", body)
    if res.get("code") != 200:
        raise RuntimeError(f"createTask failed for {job['slug']}: {res}")
    job["taskId"] = res["data"]["taskId"]
    print(f"  [submit] {job['slug']}  ->  {job['taskId']}", flush=True)
    return job


def poll(job, timeout_s=600, interval_s=6):
    tid = job["taskId"]
    deadline = time.time() + timeout_s
    last_state = None
    while time.time() < deadline:
        res = http_get(f"{BASE}/api/v1/jobs/recordInfo?taskId={tid}")
        data = res.get("data") or {}
        state = data.get("state") or data.get("status") or data.get("taskStatus")
        if state != last_state:
            print(f"  [poll]   {job['slug']}  state={state}", flush=True)
            last_state = state
        if state in ("success", "completed", "SUCCESS", "COMPLETED"):
            result = data.get("resultJson") or data.get("result") or data
            if isinstance(result, str):
                try:
                    result = json.loads(result)
                except Exception:
                    pass
            urls = (
                (result or {}).get("resultUrls")
                or (result or {}).get("imageUrls")
                or (result or {}).get("images")
                or []
            )
            if urls:
                job["image_url"] = urls[0]
                return job
            if data.get("imageUrl"):
                job["image_url"] = data["imageUrl"]
                return job
            raise RuntimeError(f"completed but no URL for {job['slug']}: {data}")
        if state in ("fail", "failed", "FAIL", "FAILED", "error", "ERROR"):
            raise RuntimeError(f"task failed for {job['slug']}: {data}")
        time.sleep(interval_s)
    raise TimeoutError(f"polling timed out for {job['slug']}")


def download(job, outdir):
    url = job["image_url"]
    out = outdir / job["filename"]
    print(f"  [save]   {job['slug']}  ->  {out.name}", flush=True)
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": (
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36"
            ),
            "Accept": "image/avif,image/webp,image/jpeg,image/png,*/*",
            "Referer": "https://kie.ai/",
        },
    )
    with urllib.request.urlopen(req, timeout=120) as r, open(out, "wb") as f:
        f.write(r.read())
    return out


def main():
    here = Path(__file__).resolve().parent.parent
    images_dir = here / "public" / "images"
    images_dir.mkdir(parents=True, exist_ok=True)

    print(f"[1/3] Submitting {len(JOBS)} jobs...", flush=True)
    with ThreadPoolExecutor(max_workers=2) as ex:
        for fut in as_completed([ex.submit(submit, j) for j in JOBS]):
            fut.result()

    print(f"[2/3] Polling {len(JOBS)} jobs...", flush=True)
    with ThreadPoolExecutor(max_workers=2) as ex:
        for fut in as_completed([ex.submit(poll, j) for j in JOBS]):
            fut.result()

    print(f"[3/3] Downloading results into {images_dir}...", flush=True)
    with ThreadPoolExecutor(max_workers=2) as ex:
        for fut in as_completed([ex.submit(download, j, images_dir) for j in JOBS]):
            fut.result()

    print("\nDone. Results:")
    for j in JOBS:
        print(f"  {j['slug']:<55}  {j['filename']}")


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"HTTPError {e.code}: {e.read().decode('utf-8', 'replace')}\n")
        sys.exit(1)
