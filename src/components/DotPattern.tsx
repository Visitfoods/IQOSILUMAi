'use client';

import React, { useEffect } from 'react';

export default function DotPattern() {
  useEffect(() => {
    console.log('DotPattern montado - Abordagem com background-image');
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 pointer-events-none">
      {/* Imagem como background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'url(/Anel.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Imagem estática de fallback */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[90%] h-[90%] border border-white border-opacity-20">
          <svg 
            viewBox="0 0 500 500" 
            className="w-full h-full"
            style={{
              stroke: 'white',
              strokeWidth: 1,
              fill: 'none',
              opacity: 0.8
            }}
          >
            <circle cx="250" cy="250" r="200" />
            <circle cx="250" cy="250" r="180" />
            <circle cx="250" cy="250" r="160" />
            <circle cx="250" cy="250" r="140" />
          </svg>
        </div>
      </div>
    </div>
  );
} 