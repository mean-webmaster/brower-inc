"""Generate cover + hero images for the July 20 2026 blog posts.

  1. crew-wont-use-porta-potty-heat-safety-oklahoma  (cover + hero)
  2. can-my-septic-handle-a-party-oklahoma           (cover + hero)

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

    python scripts/generate-jul20-covers.py
    node scripts/convert-to-webp.mjs public/images
"""

import json
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
REF_PORTA_CONSTRUCTION = f"{IMG}/brower-inc-portable-restroom-construction-site-rental-newkirk-ok.webp"

# Well-graded existing covers used as photographic-quality references.
QUAL_SEPTIC = f"{IMG}/brower-inc-septic-tank-pumping-cost-oklahoma-blog-cover-newkirk-ok.webp"
QUAL_PORTA = f"{IMG}/brower-inc-how-much-does-a-porta-potty-rental-cost-blog-cover-newkirk-ok.webp"
QUAL_EVENT = f"{IMG}/brower-inc-barn-wedding-not-enough-bathrooms-oklahoma-blog-cover-newkirk-ok.webp"

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
        "slug": "crew-wont-use-porta-potty-heat-safety-oklahoma (cover)",
        "filename": "brower-inc-crew-wont-use-porta-potty-heat-safety-oklahoma-blog-cover-newkirk-ok.jpeg",
        "refs": [REF_PORTA_CONSTRUCTION, QUAL_PORTA],
        "prompt": (
            "A photograph of a small crew of construction workers in hard hats "
            "and high-visibility vests taking a water break in the shade beside "
            "a site trailer on a sun-baked north-central Oklahoma jobsite in "
            "intense midday summer heat, one worker drinking from a water "
            "bottle and a large orange water cooler on a table beside them. In "
            "the mid-ground stands a clean bright royal-blue Brower Inc. "
            "portable restroom unit (darker navy domed roof, roof vent, small "
            "oval Brower 'B' decal high on the door — exactly matching the real "
            "unit in reference image #1), with a white Brower Inc. flatbed "
            "service truck parked nearby in soft focus. Harsh bright summer "
            "sunlight, hazy hot sky, dry dusty ground, visible heat haze. The "
            "workers in the shade are the sharp foreground subject. " + STYLE_TAIL
        ),
    },
    {
        "slug": "crew-wont-use-porta-potty-heat-safety-oklahoma (hero)",
        "filename": "brower-inc-crew-wont-use-porta-potty-heat-safety-oklahoma-blog-hero-newkirk-ok.jpeg",
        "refs": [REF_PORTA_CONSTRUCTION, QUAL_PORTA],
        "prompt": (
            "A photograph of a navy-uniformed Brower Inc. technician restocking "
            "and sanitizing a spotlessly clean bright royal-blue Brower Inc. "
            "portable restroom unit (navy domed roof, roof vent, small oval 'B' "
            "decal on the door — matching the real unit in reference image #1) "
            "on an Oklahoma construction site under bright summer sun. Beside "
            "the restroom stands a freshly stocked portable hand washing "
            "station with a foot pump and soap dispensers. The technician is "
            "wiping down surfaces and placing a fresh roll of toilet paper. "
            "Strong clear midday summer light, dusty jobsite, sharp focus on "
            "the technician, the open clean unit, and the hand washing "
            "station. " + STYLE_TAIL
        ),
    },
    {
        "slug": "can-my-septic-handle-a-party-oklahoma (cover)",
        "filename": "brower-inc-can-my-septic-handle-a-party-oklahoma-blog-cover-newkirk-ok.jpeg",
        "refs": [REF_PORTA_CONSTRUCTION, QUAL_EVENT],
        "prompt": (
            "A warm, inviting photograph of a large multi-generational family "
            "gathering under a big white shade tent on the mown lawn of a rural "
            "north-central Oklahoma farm property on a bright summer day — long "
            "tables, folding chairs, people talking and eating, an older "
            "farmhouse and a metal barn in the background. At the discreet edge "
            "of the lawn near a treeline stand two clean bright royal-blue "
            "Brower Inc. portable restroom units (darker navy domed roofs, roof "
            "vents, small oval Brower 'B' decals high on the doors — exactly "
            "matching the real unit in reference image #1), tastefully placed "
            "away from the tables. Bright natural summer daylight, green lawn, "
            "blue sky with light clouds. The gathering under the tent is the "
            "sharp foreground subject and the blue units are clearly visible "
            "but secondary. " + STYLE_TAIL
        ),
    },
    {
        "slug": "can-my-septic-handle-a-party-oklahoma (hero)",
        "filename": "brower-inc-can-my-septic-handle-a-party-oklahoma-blog-hero-newkirk-ok.jpeg",
        "refs": [REF_SEPTIC_WIDE, QUAL_SEPTIC],
        "prompt": (
            "A photograph of a white Brower Inc. vacuum septic pump truck (with "
            "a red cursive 'Brower' script on the polished tank, exactly "
            "matching reference image #1) parked on the grass of a rural "
            "north-central Oklahoma residential property on a clear summer day. "
            "A navy-uniformed technician is pumping a residential septic tank "
            "through an open rectangular access lid in the lawn, the thick "
            "green suction hose running from the open tank back to the truck. "
            "Bright natural daylight, green summer lawn, farmhouse softly out "
            "of focus in the background. Sharp focus on the open tank, the hose "
            "and the technician, conveying routine preventative maintenance. "
            + STYLE_TAIL
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
