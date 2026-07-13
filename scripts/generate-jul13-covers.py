"""Generate cover + hero images for the July 13 2026 blog posts.

  1. septic-tank-never-pumped-oklahoma              (cover + hero)
  2. porta-potty-smells-like-ammonia-summer-oklahoma (cover + hero)

Nano Banana (kie.ai, google/nano-banana-edit) pipeline. Per the project's
product-fidelity rule, each job passes a REAL Brower product photo as
image_urls[0] (the edit reference, so the product is depicted exactly) and a
well-graded live cover as image_urls[1] (photographic quality reference).

Prompts match the alt text already shipped in the blog pages and
src/lib/blog.ts so accessibility stays accurate.

Product facts honored:
  - Septic vacuum truck is WHITE with a red cursive "Brower" script on the tank
    (correct on the truck — NOT on porta-potty doors).
  - Real porta potty: bright royal-blue walls, darker navy domed roof, a roof
    vent, and a small oval Brower "B" decal high on the door. The service /
    flatbed truck is WHITE. No text or phone numbers on unit doors.
  - No invented text, phone decals, captions, or watermarks.

Run from the brower-inc directory:

    python scripts/generate-jul13-covers.py
    node scripts/convert-to-webp.mjs public/images
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
REF_PORTA_CONSTRUCTION = f"{IMG}/brower-inc-portable-restroom-construction-site-rental-newkirk-ok.webp"

# Well-graded existing covers used as photographic-quality references.
QUAL_SEPTIC = f"{IMG}/brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.webp"
QUAL_PORTA = f"{IMG}/brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.webp"

NO_TEXT = (
    "Do NOT add any text, captions, watermarks, price numbers, logos, or sky "
    "text to the image. Do NOT put any text or phone numbers on the porta-potty "
    "doors. Match the real product in reference image #1 exactly."
)
STYLE_TAIL = (
    "Photorealistic editorial photography, 16:9 wide landscape blog cover "
    "composition, sharp focus on the foreground subject, authentic rural/"
    "suburban Oklahoma atmosphere. Match the color realism and clarity of "
    "reference image #2 but use the lighting described in this prompt. " + NO_TEXT
)

JOBS = [
    {
        "slug": "septic-tank-never-pumped-oklahoma (cover)",
        "filename": "brower-inc-septic-tank-never-pumped-oklahoma-blog-cover-newkirk-ok.jpeg",
        "refs": [REF_SEPTIC_WIDE, QUAL_SEPTIC],
        "prompt": (
            "A clean, bright photograph of a white Brower Inc. vacuum septic "
            "pump truck (with a red cursive 'Brower' script on the polished tank, "
            "exactly matching reference image #1) parked beside a weathered older "
            "rural north-central Oklahoma farmhouse at midday. In the slightly "
            "overgrown backyard, a navy-uniformed technician is lifting the heavy "
            "concrete lid off a long-neglected septic tank cleanout. Bright natural "
            "daylight, blue sky, dry summer grass. The truck and technician are the "
            "sharp foreground subjects, conveying a long-overdue but routine "
            "service call. " + STYLE_TAIL
        ),
    },
    {
        "slug": "septic-tank-never-pumped-oklahoma (hero)",
        "filename": "brower-inc-septic-tank-never-pumped-oklahoma-blog-hero-newkirk-ok.jpeg",
        "refs": [REF_SEPTIC_CLOSE, QUAL_SEPTIC],
        "prompt": (
            "A close-up photograph of a navy-uniformed Brower Inc. technician "
            "(matching the uniform in reference image #1) measuring the thick, "
            "dark sludge layer inside an open, overfull residential septic tank "
            "using a long sludge-depth measuring stick, on a rural Oklahoma "
            "property. Clear natural daylight, shallow depth of field with the "
            "open tank and measuring stick in crisp focus and the lawn softly "
            "blurred behind. " + STYLE_TAIL
        ),
    },
    {
        "slug": "porta-potty-smells-like-ammonia-summer-oklahoma (cover)",
        "filename": "brower-inc-porta-potty-smells-like-ammonia-summer-oklahoma-blog-cover-newkirk-ok.jpeg",
        "refs": [REF_PORTA_CONSTRUCTION, QUAL_PORTA],
        "prompt": (
            "A photograph of a single lone Brower Inc. portable restroom unit "
            "(bright royal-blue walls, a darker navy domed roof, a roof vent, and "
            "a small oval Brower 'B' decal high on the door — exactly matching the "
            "real unit in reference image #1) standing on a dusty, sun-baked "
            "north-central Oklahoma construction site in harsh midday summer sun, "
            "with visible heat shimmer rising off the dirt. In the soft-focus "
            "background, a white Brower Inc. flatbed service truck is arriving. "
            "Bright, glaring summer sunlight, hazy hot sky, dry parched ground. "
            "The blue unit is the sharp foreground subject. " + STYLE_TAIL
        ),
    },
    {
        "slug": "porta-potty-smells-like-ammonia-summer-oklahoma (hero)",
        "filename": "brower-inc-porta-potty-smells-like-ammonia-summer-oklahoma-blog-hero-newkirk-ok.jpeg",
        "refs": [REF_PORTA_CONSTRUCTION, QUAL_PORTA],
        "prompt": (
            "A photograph of a navy-uniformed Brower Inc. technician servicing a "
            "bright royal-blue Brower Inc. portable restroom unit (navy domed "
            "roof, roof vent, small oval 'B' decal on the door — matching the real "
            "unit in reference image #1) on an Oklahoma jobsite in intense summer "
            "heat. The technician holds a service hose and is adding a fresh bright "
            "blue deodorizer charge into the unit, the vivid blue liquid clearly "
            "visible. Strong midday summer light, dusty jobsite, sharp focus on "
            "the technician and the open unit. " + STYLE_TAIL
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
        print(f"  {j['slug']:<52}  {j['filename']}")


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"HTTPError {e.code}: {e.read().decode('utf-8', 'replace')}\n")
        sys.exit(1)
