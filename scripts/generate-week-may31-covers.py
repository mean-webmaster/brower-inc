"""Generate the two new Brower Inc. blog covers for the week of 2026-05-31.

Adds covers for:
  - ada-portable-restroom-construction-oklahoma
  - septic-tank-pumping-cost-oklahoma

Each prompt is tuned for product accuracy — the Brower Inc. units, trucks,
and decals look exactly like the existing fleet (matching the kie.ai logo
reference + style reference in scripts/generate-new-blog-covers.py), but
the *scene styling* of each cover is intentionally different from anything
already on the site.

Run from the brower-inc directory:

    python scripts/generate-week-may31-covers.py
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

DECAL = (
    "On the unit's door surface, a red italicized cursive 'Brower Inc' wordmark "
    "(matching the logo in reference image #1 exactly) is applied as a clean printed "
    "vinyl decal, with a black rectangular sticker reading '580-747-6206' in white "
    "block sans-serif numerals directly beneath it. The decal sits flat against the "
    "plastic surface with subtle realistic edge wear and the same lighting as the unit. "
    "Do NOT add any other text, captions, watermarks, or sky text to the image."
)

STYLE_TAIL = (
    "Photorealistic editorial photography, sharp focus, natural color grading, "
    "16:9 wide landscape blog cover composition. Match the realistic plastic texture, "
    "fleet colors, and rural Oklahoma authenticity of reference image #2 — but use the "
    "lighting described in this prompt, not golden hour."
)

JOBS = [
    # Blog 1 — ADA Portable Restroom on a Construction Site
    # Distinct style cue: cool, crisp overcast morning light (NOT golden hour) with
    # the wider cream-and-blue ADA unit foregrounded next to a standard blue Brower
    # Inc. porta potty and a hand washing station. Makes the ADA unit the visual hero.
    {
        "slug": "ada-portable-restroom-construction-oklahoma",
        "filename": "brower-inc-ada-portable-restroom-construction-oklahoma-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A wide cinematic photograph of a clean Oklahoma commercial "
            "construction jobsite under a soft, cool, overcast morning sky (NOT "
            "golden hour). Centered in the foreground on a level compacted-gravel "
            "pad: one taller cream-and-blue Brower Inc. ADA-accessible portable "
            "restroom with a ground-level zero-step entry, a wider door with an "
            "ADA wheelchair symbol decal, and an integrated grab bar visible "
            "through the slightly open door. To its left, one standard blue "
            "Brower Inc. porta potty of the exact same fleet style as reference "
            "image #2. To its right, one freestanding blue Brower Inc. hand "
            "washing station with a foot-pump basin. A few feet behind the units, "
            "the steel structural skeleton of a half-built two-story commercial "
            "building, scaffolding, and stacks of materials. A construction "
            "worker using a wheelchair, wearing a yellow hi-vis vest and a white "
            "hard hat, is approaching the ADA unit from the right side in soft "
            "focus — captured with dignity and natural framing, not posed. Cool "
            "blue-gray sky, even diffuse light, faint long shadows, clean "
            "documentary atmosphere. " + DECAL + " " + STYLE_TAIL
        ),
    },
    # Blog 2 — Septic Tank Pumping Cost on a Rural Oklahoma Property
    # Distinct style cue: bright clear MIDDAY sun (NOT golden hour, NOT overcast),
    # tight close-up framing on the branded red/white Brower Inc. septic pump truck
    # with a technician operating the green hose into a residential cleanout —
    # different angle and time-of-day from the existing septic system cover.
    {
        "slug": "septic-tank-pumping-cost-oklahoma",
        "filename": "brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A bright clear midday photograph of a rural Oklahoma residential "
            "property. In the foreground, a branded Brower Inc. white-and-red "
            "vacuum septic pump truck (the exact truck design from reference "
            "image #2 — white tank body, red cab, red Brower Inc. wordmark on "
            "the door) is parked on a gravel driveway beside a modest single-"
            "story Oklahoma ranch home with a covered porch. A Brower Inc. "
            "technician in a navy work shirt, jeans, and work boots is crouched "
            "in the grass beside the truck, operating a thick green vacuum hose "
            "that runs into an open green plastic residential septic cleanout "
            "lid on the lawn. The hose is clean, the lawn is healthy, the "
            "technician's posture is professional and unhurried. Bright noon "
            "sunlight, strong but natural color saturation, deep blue sky with "
            "a few small white clouds, short crisp shadows directly under the "
            "subjects. Background: a wooden fence, a few mature oak trees, and "
            "a flat Oklahoma horizon. Do NOT add cost figures, dollar signs, "
            "price tags, or any text overlays to the scene — pricing is "
            "communicated by the blog headline, not by the image. " + STYLE_TAIL
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
    with ThreadPoolExecutor(max_workers=4) as ex:
        for fut in as_completed([ex.submit(submit, j) for j in JOBS]):
            fut.result()

    print(f"[2/3] Polling {len(JOBS)} jobs...", flush=True)
    with ThreadPoolExecutor(max_workers=4) as ex:
        for fut in as_completed([ex.submit(poll, j) for j in JOBS]):
            fut.result()

    print(f"[3/3] Downloading results into {images_dir}...", flush=True)
    with ThreadPoolExecutor(max_workers=4) as ex:
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
