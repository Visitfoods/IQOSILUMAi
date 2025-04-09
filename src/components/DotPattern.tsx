'use client';

import React from 'react';

export default function DotPattern() {
  return (
    <div className="fixed inset-0 w-screen h-screen z-20 pointer-events-none">
      {/* Imagem como background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'url(/Anel.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.15)',
        }}
      />
    </div>
  );
} 