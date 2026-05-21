"""Generate Brower Inc. blog cover images via Nano Banana (kie.ai).

Submits all jobs, polls until done, downloads the results to
brower-inc/public/images/. Run from the brower-inc directory:

    python scripts/generate-blog-covers.py
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

LOGO_URL = "https://assets.cdn.filesafe.space/Vil2untX5HPYLFH0yUEi/media/6727accb3c7a806cd8d83df0.png"
STYLE_REF_URL = (
    "https://browerinc.net/images/"
    "brower-inc-porta-potty-rental-cost-oklahoma-blog-cover-newkirk-ok.webp"
)
SEPTIC_STYLE_REF_URL = (
    "https://browerinc.net/images/"
    "brower-inc-porta-potty-vs-luxury-restroom-trailer-oklahoma-blog-cover-newkirk-ok.jpeg"
)

# Brand decal description we want stamped naturally on every unit
DECAL = (
    "On the unit's door surface, a red italicized cursive 'Brower Inc' wordmark "
    "(matching the logo in reference image #1 exactly) is applied as a clean printed "
    "vinyl decal, with a black rectangular sticker reading '580-747-6206' in white "
    "block sans-serif numerals directly beneath it. The decal sits flat against the "
    "plastic surface with subtle realistic edge wear and the same lighting as the unit. "
    "Do NOT add any other text, captions, watermarks, or sky text to the image."
)

STYLE_TAIL = (
    "Match the cinematic golden-hour color grading, sharpness, and rural Oklahoma "
    "atmosphere of reference image #2. Photorealistic editorial photography, 16:9 "
    "wide landscape blog cover composition."
)

JOBS = [
    {
        "slug": "porta-potty-rental-cost-oklahoma",
        "filename": "brower-inc-porta-potty-rental-cost-oklahoma-blog-cover-v2-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "Four blue Brower Inc. porta potties in a tight row on a concrete pad in "
            "flat rural Oklahoma. A wheat field stretches behind them to the horizon, "
            "soft golden-hour sunlight from camera-left, deep blue sky with one or two "
            "wispy clouds. " + DECAL + " " + STYLE_TAIL
        ),
    },
    {
        "slug": "porta-potty-rental-near-me-rural-oklahoma",
        "filename": "brower-inc-porta-potty-rental-near-me-rural-oklahoma-blog-cover-v2-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A single blue Brower Inc. porta potty standing on the shoulder of a "
            "rural Oklahoma dirt-and-gravel county road. A red Brower Inc. service "
            "pickup truck is parked just beyond it. An old weathered wooden farmhouse "
            "and a lone tree silhouette sit on the horizon, wheat fields on either "
            "side. Golden-hour amber sunset light, long shadows across the road. "
            + DECAL + " " + STYLE_TAIL
        ),
    },
    {
        "slug": "oil-gas-portable-sanitation-oklahoma",
        "filename": "brower-inc-oil-gas-portable-sanitation-oklahoma-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A blue Brower Inc. porta potty in the foreground of a working Oklahoma "
            "oil and gas drilling site. A drilling rig towers in the mid-ground, a "
            "pump jack is visible to the side, and a single wind turbine spins on the "
            "distant horizon — the energy mix of the Oklahoma plains. Reddish dirt "
            "service road, cloudless deep-blue sky, mid-afternoon golden light. "
            + DECAL + " " + STYLE_TAIL
        ),
    },
    {
        "slug": "construction-site-sanitation-tips",
        "filename": "brower-inc-construction-site-sanitation-tips-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A precise row of six blue Brower Inc. porta potties on a tamped-dirt "
            "staging area at an active Oklahoma residential subdivision construction "
            "site. Wood framing and bare studs of a half-built home stand behind, a "
            "yellow excavator works in the mid-ground, stacks of lumber and gray "
            "cinder blocks to one side. Bright midday sunlight, hard shadows, deep "
            "blue cloudless sky. " + DECAL + " " + STYLE_TAIL
        ),
    },
    {
        "slug": "event-planning-restroom-guide",
        "filename": "brower-inc-event-planning-restroom-guide-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A long row of about fifteen pristine blue Brower Inc. porta potties "
            "lined up in tight formation on freshly cut grass at an outdoor Oklahoma "
            "event venue. A white wedding tent and warm string lights stretch through "
            "the soft-focus background. Late-afternoon golden sunlight, lush green "
            "grass with scattered wildflowers. " + DECAL + " " + STYLE_TAIL
        ),
    },
    {
        "slug": "portable-restroom-rental-guide",
        "filename": "brower-inc-portable-restroom-rental-guide-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A red Brower Inc. service flatbed truck with a portable-restroom hauling "
            "rig in the foreground, lowering a fresh blue Brower Inc. porta potty "
            "onto a concrete pad on the edge of an Oklahoma property. The truck door "
            "displays a 'Brower Inc' decal. Bright morning daylight, dewy grass, "
            "distant treeline of cottonwoods. Sharp focus on the truck and unit. "
            + DECAL + " " + STYLE_TAIL
        ),
    },
    {
        "slug": "how-clean-are-portable-restrooms",
        "filename": "brower-inc-how-clean-are-portable-restrooms-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A pristine blue Brower Inc. porta potty centered in the foreground of a "
            "clean industrial warehouse with corrugated metal walls, polished concrete "
            "floor, and overhead fluorescent lighting. A Brower Inc. technician in a "
            "navy work uniform with a 'Brower Inc' embroidered chest logo is wiping "
            "down the unit's exterior door with a microfiber cloth. The unit gleams, "
            "freshly detailed. Cool clean warehouse lighting. " + DECAL + " " + STYLE_TAIL
        ),
    },
    {
        "slug": "septic-system-maintenance-oklahoma",
        "filename": "brower-inc-septic-system-maintenance-oklahoma-blog-cover-newkirk-ok.jpeg",
        "style_ref": SEPTIC_STYLE_REF_URL,
        "prompt": (
            "A white Brower Inc. septic pump truck — a large vacuum tanker with a "
            "green corrugated pumping hose deployed — parked on the gravel drive of "
            "a rural Oklahoma residential property. A Brower Inc. technician in a "
            "navy work shirt is operating the pumping rig over an open residential "
            "septic-tank cleanout in the lawn. A modest single-story brick home with "
            "a green lawn sits in the soft-focus background. Bright midday sun, blue "
            "sky with light cumulus clouds. The truck's side panel prominently "
            "displays a large red italicized 'Brower Inc' cursive wordmark (matching "
            "reference image #1) with the secondary tagline 'VIP Shower Trailer & "
            "Restrooms / Septic Service' and a clear '580-747-6206' phone number in "
            "black block numerals. The decal is photorealistic and applied flat to "
            "the painted truck side. Do NOT add any other text or captions. "
            "Match the warm sunlit Oklahoma feel and editorial polish of reference "
            "image #2. Photorealistic editorial photography, 16:9 wide landscape "
            "blog cover composition."
        ),
    },
]


def http_post(url, body):
    req = urllib.request.Request(
        url,
        data=json.dumps(body).encode("utf-8"),
        headers=HEADERS,
        method="POST",
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
            "image_urls": [LOGO_URL, job["style_ref"]],
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
            # Try fallback fields
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
    print(f"  [save]   {job['slug']}  ->  {out.name}  ({url[:60]}...)", flush=True)
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
    with ThreadPoolExecutor(max_workers=8) as ex:
        for fut in as_completed([ex.submit(submit, j) for j in JOBS]):
            fut.result()

    print(f"[2/3] Polling {len(JOBS)} jobs...", flush=True)
    with ThreadPoolExecutor(max_workers=8) as ex:
        for fut in as_completed([ex.submit(poll, j) for j in JOBS]):
            fut.result()

    print(f"[3/3] Downloading results into {images_dir}...", flush=True)
    with ThreadPoolExecutor(max_workers=8) as ex:
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
