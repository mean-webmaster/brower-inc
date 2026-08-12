"""Regenerate ONLY the crew-heat-safety cover for July 20 2026.

v1 failed product fidelity: the model painted a red text + phone-number decal
onto the porta-potty door. Per the project rule the red cursive "Brower" script
belongs on the SEPTIC VACUUM TRUCK tank only — porta-potty doors carry nothing
but the small oval "B" decal. This version hammers that constraint and pulls
the unit closer/cleaner in frame.

Run from the brower-inc directory:

    python scripts/generate-jul20-cover-v2.py
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
REF_PORTA_CONSTRUCTION = f"{IMG}/brower-inc-portable-restroom-construction-site-rental-newkirk-ok.webp"
QUAL_PORTA = f"{IMG}/brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.webp"

FILENAME = "brower-inc-crew-wont-use-porta-potty-heat-safety-oklahoma-blog-cover-newkirk-ok.jpeg"

PROMPT = (
    "A photograph of a small crew of construction workers in hard hats and "
    "orange high-visibility vests taking a water break in the shade beside a "
    "white site trailer on a sun-baked north-central Oklahoma jobsite in "
    "intense midday summer heat. One worker drinks from a water bottle, "
    "another sits on a cooler, and a large orange drink cooler sits on a "
    "folding table beside them. About twenty feet away in clear view stands a "
    "single clean portable restroom unit that must match reference image #1 "
    "EXACTLY: bright royal-blue plastic walls, a darker navy domed roof, a "
    "roof vent, and ONE small plain white oval decal containing only the "
    "single letter B, high on the door. "
    "CRITICAL PRODUCT ACCURACY: the porta-potty door must be COMPLETELY BLANK "
    "apart from that small oval B decal. Absolutely NO red lettering, NO "
    "cursive script, NO company wordmark, NO phone number, NO stickers, NO "
    "signage, and NO banner of any kind anywhere on the unit. Any red script "
    "or phone number on the restroom is WRONG and must not appear. "
    "Harsh bright summer sunlight, hazy hot pale sky, dry dusty bare ground, "
    "faint heat haze in the distance. The workers resting in the shade are the "
    "sharp foreground subject; the blue restroom is clearly visible and clean "
    "in the mid-ground. "
    "Photorealistic editorial photography, 16:9 wide landscape blog cover "
    "composition, authentic rural Oklahoma construction atmosphere. Match the "
    "color realism and clarity of reference image #2. "
    "Do NOT add any text, captions, watermarks, price numbers, logos, or sky "
    "text anywhere in the image."
)


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
    body = {
        "model": "google/nano-banana-edit",
        "input": {
            "prompt": PROMPT,
            "image_urls": [REF_PORTA_CONSTRUCTION, QUAL_PORTA],
            "output_format": "jpeg",
            "image_size": "16:9",
        },
    }
    res = http_post(f"{BASE}/api/v1/jobs/createTask", body)
    if res.get("code") != 200:
        raise RuntimeError(f"createTask failed: {res}")
    tid = res["data"]["taskId"]
    print(f"  [submit] {tid}", flush=True)

    deadline = time.time() + 600
    image_url = None
    last_state = None
    while time.time() < deadline:
        r = http_get(f"{BASE}/api/v1/jobs/recordInfo?taskId={tid}")
        data = r.get("data") or {}
        state = data.get("state") or data.get("status") or data.get("taskStatus")
        if state != last_state:
            print(f"  [poll]   state={state}", flush=True)
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
            image_url = urls[0] if urls else data.get("imageUrl")
            break
        if state in ("fail", "failed", "FAIL", "FAILED", "error", "ERROR"):
            raise RuntimeError(f"task failed: {data}")
        time.sleep(6)

    if not image_url:
        raise TimeoutError("no image URL returned")

    out = Path(__file__).resolve().parent.parent / "public" / "images" / FILENAME
    req = urllib.request.Request(
        image_url,
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
    print(f"  [save]   {out.name}", flush=True)


if __name__ == "__main__":
    try:
        main()
    except urllib.error.HTTPError as e:
        sys.stderr.write(f"HTTPError {e.code}: {e.read().decode('utf-8', 'replace')}\n")
        sys.exit(1)
