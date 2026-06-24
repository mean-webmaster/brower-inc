"""Generate the two NEW Brower Inc. blog covers (OSHA compliance + Events guide).

Uses the same Nano Banana (kie.ai) pipeline as scripts/generate-blog-covers.py
but only adds the two jobs we need today — no regeneration of existing covers.

Run from the brower-inc directory:

    python scripts/generate-new-blog-covers.py
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
    "Match the cinematic golden-hour color grading, sharpness, and rural Oklahoma "
    "atmosphere of reference image #2. Photorealistic editorial photography, 16:9 "
    "wide landscape blog cover composition."
)

JOBS = [
    # New Week 3A — OSHA Compliance Checklist
    # Distinct from the existing construction-site-sanitation-tips cover by showing
    # a mixed compliance setup (standard + ADA + hand wash) on a commercial site
    # at golden hour, framed wider — the "compliance plan" feel.
    {
        "slug": "osha-portable-restroom-requirements-construction-oklahoma",
        "filename": "brower-inc-osha-portable-restroom-requirements-construction-oklahoma-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A wide angled cinematic photograph of a mid-size active Oklahoma "
            "commercial construction site at golden hour. In the foreground, "
            "lined up on a level compacted-gravel staging pad: two standard blue "
            "Brower Inc. porta potties on the left, one taller cream-and-blue "
            "Brower Inc. ADA-accessible portable restroom with ground-level entry "
            "in the middle, and one freestanding blue Brower Inc. hand washing "
            "station with a foot-pump basin on the right. Behind them, a half-built "
            "two-story commercial structure with bare structural steel framing, "
            "scaffolding, and stacks of construction materials. A few workers in "
            "yellow hi-vis vests and white hard hats are visible in soft focus in "
            "the background. Long warm-amber shadows across the gravel, deep blue "
            "Oklahoma sky with a few high wispy clouds. " + DECAL + " " + STYLE_TAIL
        ),
    },
    # New Week 2A — Outdoor Events Guide
    # Wedding / festival venue, golden hour, blends standard units + VIP trailer,
    # distinctly elegant atmosphere (different from the existing tight-row event cover).
    {
        "slug": "complete-guide-portable-restrooms-oklahoma-outdoor-events",
        "filename": "brower-inc-complete-guide-portable-restrooms-oklahoma-outdoor-events-blog-cover-newkirk-ok.jpeg",
        "style_ref": STYLE_REF_URL,
        "prompt": (
            "A picturesque Oklahoma outdoor wedding-and-festival venue at golden "
            "hour. A large white peaked event tent strung with warm cafe-style "
            "string lights stretches across the soft-focus background; freshly cut "
            "green lawn with scattered Oklahoma wildflowers in the foreground. "
            "In the mid-ground, a Brower Inc. white luxury 18-station VIP restroom "
            "trailer with cream paneling and softly glowing step lights is parked "
            "elegantly on the lawn, with two pristine blue Brower Inc. porta potties "
            "(a standard and a wider ADA-accessible unit) tastefully placed beside "
            "it on a discreet ground mat. Distant Oklahoma rolling hills and a few "
            "cottonwood trees on the horizon. Soft amber sunset light, warm long "
            "shadows, lush atmosphere — elegant but unmistakably rural Oklahoma. "
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
        print(f"  {j['slug']:<60}  {j['filename']}")


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"HTTPError {e.code}: {e.read().decode('utf-8', 'replace')}\n")
        sys.exit(1)
