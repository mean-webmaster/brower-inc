"""Generate cover + hero images for the June 22 2026 blog posts.

  1. aerobic-septic-system-oklahoma  (cover + hero)
  2. restroom-trailer-rental-oklahoma (cover + hero)

Nano Banana (kie.ai, google/nano-banana-edit) pipeline. Per the project's
product-fidelity rule, each job passes a REAL Brower product photo as
image_urls[0] (the edit reference, so the product is depicted exactly) and a
well-graded live cover as image_urls[1] (photographic quality reference).

Product facts honored:
  - Septic vacuum truck is WHITE with a red cursive "Brower" script on the tank
    (correct on the truck — NOT on porta-potty doors).
  - Luxury restroom trailers are WHITE.
  - No invented text, phone decals, captions, or watermarks.

Run from the brower-inc directory:

    python scripts/generate-jun22-covers.py
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

IMG = "https://browerinc.net/images"

# Real Brower product photos used as edit references (verified live, 200).
REF_SEPTIC_WIDE = f"{IMG}/brower-inc-septic-pumping-service-residential-wide-newkirk-ok.webp"
REF_SEPTIC_CLOSE = f"{IMG}/brower-inc-septic-pumping-service-residential-close-newkirk-ok.webp"
REF_TRAILER_SIDE = f"{IMG}/brower-inc-vip-shower-restroom-trailer-exterior-side-newkirk-ok.webp"
REF_TRAILER_INTERIOR = f"{IMG}/brower-inc-vip-restroom-trailer-interior-vanity-stalls-newkirk-ok.webp"

# Well-graded existing covers used as photographic-quality references.
QUAL_SEPTIC = f"{IMG}/brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.webp"
QUAL_TRAILER = f"{IMG}/brower-inc-porta-potty-vs-luxury-restroom-trailer-oklahoma-blog-cover-newkirk-ok.webp"

NO_TEXT = (
    "Do NOT add any text, captions, watermarks, price numbers, logos, or sky "
    "text to the image. Match the real product in reference image #1 exactly."
)
STYLE_TAIL = (
    "Photorealistic editorial photography, 16:9 wide landscape blog cover "
    "composition, sharp focus on the foreground subject, authentic rural/"
    "suburban Oklahoma atmosphere. Match the color realism and clarity of "
    "reference image #2 but use the lighting described in this prompt. " + NO_TEXT
)

JOBS = [
    {
        "slug": "aerobic-septic-system-oklahoma (cover)",
        "filename": "brower-inc-aerobic-septic-system-oklahoma-blog-cover-newkirk-ok.jpeg",
        "refs": [REF_SEPTIC_WIDE, QUAL_SEPTIC],
        "prompt": (
            "A clean, bright photograph of a white Brower Inc. vacuum septic "
            "pump truck (with a red cursive 'Brower' script on the polished tank, "
            "exactly matching reference image #1) parked on a gravel driveway "
            "beside a modest rural Oklahoma ranch home. In the green front lawn, "
            "small low aerobic-septic spray heads gently mist water in fine arcs, "
            "and a navy-uniformed technician stands at a small green aerobic "
            "control/alarm panel box mounted on a short post, checking it. Bright "
            "clear midday daylight, blue sky with a few white clouds, healthy "
            "green grass. The truck and technician are the sharp foreground "
            "subjects. " + STYLE_TAIL
        ),
    },
    {
        "slug": "aerobic-septic-system-oklahoma (hero)",
        "filename": "brower-inc-aerobic-septic-system-oklahoma-blog-hero-newkirk-ok.jpeg",
        "refs": [REF_SEPTIC_CLOSE, QUAL_SEPTIC],
        "prompt": (
            "A close-up photograph of a green aerobic septic system control and "
            "alarm panel box mounted on a short post in a green residential "
            "Oklahoma back lawn, with a low spray head misting fine arcs of water "
            "across the grass behind it. A navy-uniformed Brower Inc. technician "
            "(matching the uniform in reference image #1) is partly visible, "
            "inspecting the open panel. Clear natural daylight, shallow depth of "
            "field with the panel in crisp focus and the lawn softly blurred. "
            + STYLE_TAIL
        ),
    },
    {
        "slug": "restroom-trailer-rental-oklahoma (cover)",
        "filename": "brower-inc-restroom-trailer-rental-oklahoma-blog-cover-newkirk-ok.jpeg",
        "refs": [REF_TRAILER_SIDE, QUAL_TRAILER],
        "prompt": (
            "A cinematic photograph of a clean white Brower Inc. luxury restroom "
            "trailer (exactly matching the trailer in reference image #1) parked "
            "on neat grass at an elegant outdoor Oklahoma wedding venue. Warm "
            "golden-hour light, a white peaked reception tent and softly glowing "
            "string lights in the background, a few well-dressed guests far out of "
            "focus. The trailer with its entry steps is the sharp, inviting "
            "foreground subject, conveying upscale comfort and clean quality. "
            + STYLE_TAIL
        ),
    },
    {
        "slug": "restroom-trailer-rental-oklahoma (hero)",
        "filename": "brower-inc-restroom-trailer-rental-oklahoma-blog-hero-newkirk-ok.jpeg",
        "refs": [REF_TRAILER_INTERIOR, QUAL_TRAILER],
        "prompt": (
            "A bright, clean interior photograph of a Brower Inc. luxury restroom "
            "trailer (matching the finish in reference image #1): a polished "
            "wood-look vanity with two white porcelain sinks, large framed "
            "mirrors, warm flattering lighting, fresh towels, and private "
            "flushing-toilet stalls with paneled doors. Upscale, spotless, "
            "hotel-quality finish, inviting and well-lit. " + STYLE_TAIL
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
            "image_urls": job["refs"],
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
    with ThreadPoolExecutor(max_workers=4) as ex:
        for fut in as_completed([ex.submit(submit, j) for j in JOBS]):
            fut.result()

    print(f"[2/3] Polling {len(JOBS)} jobs...", flush=True)
    with ThreadPoolExecutor(max_workers=4) as ex:
        for fut in as_completed([ex.submit(poll, j) for j in JOBS]):
            fut.result()

    print(f"[3/3] Downloading into {images_dir}...", flush=True)
    with ThreadPoolExecutor(max_workers=4) as ex:
        for fut in as_completed([ex.submit(download, j, images_dir) for j in JOBS]):
            fut.result()

    print("\nDone. Results:")
    for j in JOBS:
        print(f"  {j['slug']:<45}  {j['filename']}")


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"HTTPError {e.code}: {e.read().decode('utf-8', 'replace')}\n")
        sys.exit(1)
