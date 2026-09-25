# Brand logos

Drop each brand's logo file in this folder using the **exact filename** below.
The site loads `/logos/<name>.<ext>` and accepts `.png`, `.svg`, `.jpg` or
`.webp` (it tries them in that order). Until a file exists, that box falls back
to a built-in placeholder emblem automatically — nothing breaks.

## Filenames

Experience:
- `hillingdon`     → Hillingdon Council
- `deepmind`       → Google DeepMind
- `blockchainsoc`  → Brunel Society of Blockchain
- `screenshare`    → Screen Share UK
- `jam`            → Jam Coding
- `uxbridgelibrary`→ Uxbridge Library

Education:
- `brunel`     → Brunel University of London
- `kingston`   → Kingston College

Organizations:
- `rae`        → Royal Academy of Engineering
- `acm`        → ACM
- `cyf`        → Code Your Future
- `isoc`       → Internet Society
- `ieee`       → IEEE
- `bcs`        → BCS, The Chartered Institute for IT

Example: save the ACM logo as `public/logos/acm.png`.

## For best, uniform results

Every tile is the same size (50×50, rounded) and the image is shown with
`object-fit: cover`, so:

- **Crop each logo to a square.** For wide logos (IEEE, Internet Society) crop to
  just the icon/mark, not the wordmark.
- A logo that already has its own coloured background (ACM, DeepMind, Kingston,
  Screen Share, RAE, Internet Society, Brunel) will sit edge-to-edge and look
  like a neat square chip.
- Transparent-background logos show the card's own colour behind them, which
  can kill the contrast on a dark mark. When that happens, give the entry a
  `logoBg` in `content.js` (e.g. `logoBg: '#ffffff'`) to put a solid tile
  behind it instead of editing the image.
- ~256×256 px (or SVG) is plenty.
