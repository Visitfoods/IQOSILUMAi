'use client';

import React, { useEffect } from 'react';

export default function DotPattern() {
  useEffect(() => {
    console.log('DotPattern montado - Aumentando altura da moldura');
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 pointer-events-none">
      {/* Imagem como background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'url(/Anel.png)',
          backgroundSize: '105% 120%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          transform: 'scaleY(1.15) scaleX(1.02) translateY(-10%)',
        }}
      />
    </div>
  );
} 