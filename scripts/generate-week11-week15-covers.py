"""Generate the two NEW Brower Inc. blog covers for this week's posts.

  - Week 11 Blog A: "How to Choose a Portable Restroom Provider (10-Point Checklist)"
  - Week 15 Blog B: "How Much Does a Porta Potty Rental Really Cost? ($150 vs $287)"

Same Nano Banana (kie.ai) pipeline as scripts/generate-new-blog-covers.py.
Both prompts are deliberately distinct from the existing golden-hour covers:
the provider-checklist cover centers a human handshake / service relationship,
and the pricing cover uses bright clear MORNING light on a single residential
unit (existing cost cover is four units at dusk in a wheat field).

Run from the brower-inc directory:

    python scripts/generate-week11-week15-covers.py
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
    "Do NOT add any other text, captions, watermarks, price numbers, or sky text to the image."
)

STYLE_TAIL = (
    "Photorealistic editorial photography, 16:9 wide landscape blog cover composition, "
    "sharp focus on the foreground subject, rural/suburban Oklahoma atmosphere. "
    "Match the color realism and clarity of reference image #2 but use the lighting "
    "described in this prompt."
)

JOBS = [
    # Week 11 Blog A — Provider Checklist / "choosing the right company"
    # Differentiator: a human service relationship (handshake + clipboard checklist),
    # which none of the existing covers show. Clean, organized jobsite, golden hour.
    {
        "slug": "how-to-choose-portable-restroom-company-oklahoma",
        "filename": "brower-inc-how-to-choose-portable-restroom-company-oklahoma-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A cinematic photograph of a confident general contractor in a yellow "
            "hi-vis safety vest and white hard hat shaking hands with a Brower Inc. "
            "service technician in a clean navy work uniform, standing together beside "
            "one pristine blue Brower Inc. porta potty and a branded red Brower Inc. "
            "service pickup truck on a tidy, well-organized Oklahoma commercial "
            "construction site. The contractor holds a clipboard with a printed "
            "checklist in his free hand. A half-built structure with neat scaffolding "
            "sits softly out of focus in the background under a clear blue sky. Warm "
            "late-afternoon golden-hour light, clean compacted-gravel ground, an "
            "organized professional feeling of trust and reliability. " + DECAL + " " + STYLE_TAIL
        ),
    },
    # Week 15 Blog B — Pricing / "what you actually pay" ($150 vs $287)
    # Differentiator: BRIGHT CLEAR MORNING daylight on a SINGLE residential unit on a
    # suburban driveway (existing cost cover is four units at dusk in a wheat field).
    {
        "slug": "how-much-does-a-porta-potty-rental-really-cost",
        "filename": "brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A clean, bright photograph of a single spotless blue Brower Inc. porta "
            "potty standing on a neat gravel residential driveway in front of a modest "
            "single-story Oklahoma home with a mowed green lawn and a white picket-style "
            "fence. Crisp clear early-morning daylight, soft blue sky with a few small "
            "white clouds, gentle morning shadows, dew-fresh and approachable. The unit "
            "is the sharp foreground subject, centered slightly left, immaculately clean "
            "and well-maintained, conveying honest value and transparent quality. "
            + DECAL + " " + STYLE_TAIL
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
