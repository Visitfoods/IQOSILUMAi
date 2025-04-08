'use client';

import React from 'react';
import Image from 'next/image';

export default function DotPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="relative w-full h-full max-w-[1920px] max-h-[1080px] mx-auto">
        <Image
          src="/Anel.png"
          alt="Moldura decorativa"
          fill
          style={{ 
            objectFit: 'contain',
            objectPosition: 'center',
            maxWidth: '100vw',
            maxHeight: '100vh'
          }}
          priority
          sizes="100vw"
          quality={100}
          className="opacity-80"
        />
      </div>
    </div>
  );
} 