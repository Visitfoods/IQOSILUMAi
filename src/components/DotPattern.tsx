'use client';

import React from 'react';
import Image from 'next/image';

export default function DotPattern() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-[90vw] h-[90vh] md:w-[80vw] md:h-[80vh]">
          <Image
            src="/Anel.png"
            alt="Moldura decorativa"
            fill
            style={{ 
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            priority
            sizes="(max-width: 768px) 90vw, 80vw"
            quality={100}
            className="opacity-80"
          />
        </div>
      </div>
    </div>
  );
} 