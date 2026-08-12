"""Regenerate ONE image: the fall-event-porta-potty-booking-oklahoma hero.

v1 came back with (a) garbled fake lettering rendered on the porta-potty doors
and the truck door, which is the recurring Nano Banana failure this project has
hit before, and (b) summer-green evening light with guests already present,
where the brief called for an empty, early-autumn morning set-up scene.

This pass hammers the no-text rule and pins the season/time of day.

Run from the brower-inc directory:

    python scripts/generate-aug12-cover-v2.py
    node scripts/convert-to-webp.mjs public/images
"""

import json
import sys
import time
import urllib.request
import urllib.error
from pathlib import Path

API_KEY = "2ec2079ee0c4fa694a787bbfa5887ee3"
BASE = "https://api.kie.ai"
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
}

IMG = "https://browerinc.net/images"

REF_DELIVERY_DAY = f"{IMG}/brower-inc-service-truck-portable-restroom-delivery-daytime-newkirk-ok.webp"
QUAL_EVENT = f"{IMG}/brower-inc-barn-wedding-not-enough-bathrooms-oklahoma-blog-cover-newkirk-ok.webp"

JOB = {
    "slug": "fall-event-porta-potty-booking-oklahoma (hero v2)",
    "filename": "brower-inc-fall-event-porta-potty-booking-oklahoma-blog-hero-newkirk-ok.jpeg",
    "refs": [REF_DELIVERY_DAY, QUAL_EVENT],
    "prompt": (
        "A photograph of a white Brower Inc. flatbed service truck (exactly "
        "matching the real truck in reference image #1) parked on the grass of "
        "a rural Oklahoma event ground in EARLY AUTUMN, delivering portable "
        "restrooms the morning before a festival. A navy-uniformed technician "
        "is guiding a clean bright royal-blue portable restroom unit into "
        "position on level ground beside two units already set in a neat row. "
        "The units have bright royal-blue walls, a darker navy domed roof, and "
        "a roof vent, matching the real units in reference image #1. "
        "IMPORTANT: the porta-potty doors must be COMPLETELY BLANK and smooth "
        "— absolutely no lettering, no words, no decals, no logos, no signage, "
        "no numbers of any kind anywhere on the doors or walls of the units. "
        "The truck doors must also be completely blank white with no lettering "
        "or logos. Empty white vendor tents stand unfinished in the background "
        "with NO people other than the single technician and NO tables, chairs, "
        "string lights, or decorations yet — the event has not started. "
        "Setting: cool clear early-autumn morning, low golden sunrise light "
        "raking across the field, long shadows, dew on grass that is going "
        "tan and dormant for the season, oak trees turning gold and orange "
        "along a treeline, a harvested brown field beyond the fence. Sharp "
        "focus on the technician and the unit being set, conveying an "
        "unhurried delivery done well ahead of the event. "
        "Photorealistic editorial photography, 16:9 wide landscape blog cover "
        "composition, authentic rural north-central Oklahoma atmosphere. Match "
        "the color realism and clarity of reference image #2 but use the "
        "autumn sunrise lighting described here. Do NOT add any text, "
        "captions, watermarks, logos, or sky text anywhere in the image."
    ),
}


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


def main():
    here = Path(__file__).resolve().parent.parent
    out = here / "public" / "images" / JOB["filename"]

    body = {
        "model": "google/nano-banana-edit",
        "input": {
            "prompt": JOB["prompt"],
            "image_urls": JOB["refs"],
            "output_format": "jpeg",
            "image_size": "16:9",
        },
    }
    res = http_post(f"{BASE}/api/v1/jobs/createTask", body)
    if res.get("code") != 200:
        raise RuntimeError(f"createTask failed: {res}")
    tid = res["data"]["taskId"]
    print(f"[submit] {JOB['slug']} -> {tid}", flush=True)

    deadline = time.time() + 600
    last = None
    while time.time() < deadline:
        data = (http_get(f"{BASE}/api/v1/jobs/recordInfo?taskId={tid}").get("data")) or {}
        state = data.get("state") or data.get("status") or data.get("taskStatus")
        if state != last:
            print(f"[poll]   state={state}", flush=True)
            last = state
        if state in ("success", "completed", "SUCCESS", "COMPLETED"):
            result = data.get("resultJson") or data.get("result") or data
            if isinstance(result, str):
                result = json.loads(result)
            urls = (
                (result or {}).get("resultUrls")
                or (result or {}).get("imageUrls")
                or (result or {}).get("images")
                or []
            )
            url = urls[0] if urls else data.get("imageUrl")
            if not url:
                raise RuntimeError(f"completed but no URL: {data}")
            print(f"[save]   -> {out.name}", flush=True)
            req = urllib.request.Request(
                url,
                headers={
                    "User-Agent": (
                        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                        "AppleWebKit/537.36 (KHTML, like Gecko) "
                        "Chrome/130.0.0.0 Safari/537.36"
                    ),
                    "Accept": "image/avif,image/webp,image/jpeg,image/png,*/*",
                    "Referer": "https://kie.ai/",
                },
            )
            with urllib.request.urlopen(req, timeout=120) as r, open(out, "wb") as f:
                f.write(r.read())
            print("Done.", flush=True)
            return
        if state in ("fail", "failed", "FAIL", "FAILED", "error", "ERROR"):
            raise RuntimeError(f"task failed: {data}")
        time.sleep(6)
    raise TimeoutError("polling timed out")


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"HTTPError {e.code}: {e.read().decode('utf-8', 'replace')}\n")
        sys.exit(1)
