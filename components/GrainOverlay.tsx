import React from 'react';

/**
 * A subtle grain texture overlay component for adding visual texture to backgrounds.
 * This component should be placed inside a parent with position: relative.
 */
export default function GrainOverlay() {
  return (
    <div className="absolute inset-0 opacity-[0.02]" 
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
} 