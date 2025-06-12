# Font Files Required

This directory should contain the following font files for the Sovira brand:

## Required Fonts

1. **Neue Haas Grotesk Display**
   - `NeueHaasDisplay-Roman.woff2` (Regular weight)
   - `NeueHaasDisplay-Bold.woff2` (Bold weight)

2. **Spectral**
   - `Spectral-Italic.woff2` (Italic style)

## Installation

1. Purchase/obtain licenses for the fonts
2. Convert to WOFF2 format for optimal web performance
3. Place the files in this directory
4. The CSS in `app/globals.css` will automatically load them

## Fallback Fonts

Until custom fonts are added, the site will use these system fallbacks:
- Neue Haas → system-ui, -apple-system, sans-serif
- Spectral → serif
- Neue Haas Grotesk Display → system-ui, -apple-system, sans-serif

## Performance Note

All fonts are configured with `font-display: swap` to ensure text remains visible during font load. 