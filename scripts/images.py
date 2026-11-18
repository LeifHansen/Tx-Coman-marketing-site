#!/usr/bin/env python3
"""Create responsive hero images from one source photograph.

Usage:
    python3 scripts/images.py path/to/hero-photo.png
    node scripts/build.mjs

Writes assets/hero/hero-packaging-{800,1200,1600,2000}.{webp,jpg} plus
assets/hero/manifest.json. When the manifest exists, the build switches the
homepage hero from the illustrated lineup to the photograph. Requires Pillow.
"""
import json
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "hero"
NAME = "hero-packaging"
WIDTHS = [800, 1200, 1600, 2000]


def main(src: str) -> None:
    im = Image.open(src).convert("RGB")
    OUT.mkdir(parents=True, exist_ok=True)
    sizes = [w for w in WIDTHS if w <= im.width] or [im.width]
    for w in sizes:
        h = round(im.height * w / im.width)
        resized = im.resize((w, h), Image.LANCZOS)
        resized.save(OUT / f"{NAME}-{w}.webp", "WEBP", quality=80, method=6)
        resized.save(OUT / f"{NAME}-{w}.jpg", "JPEG", quality=82, optimize=True, progressive=True)
        print(f"  {NAME}-{w}.webp / .jpg  ({w}x{h})")
    fallback = 1600 if 1600 in sizes else sizes[-1]
    manifest = {"name": NAME, "width": im.width, "height": im.height, "sizes": sizes, "fallback": fallback}
    (OUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    print("Wrote assets/hero/manifest.json. Now run: node scripts/build.mjs")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
