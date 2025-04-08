'use client';

import React from 'react';
import Image from 'next/image';

export default function DotPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center">
      <div className="relative w-full h-full">
        <Image
          src="/Anel.png"
          alt="Moldura decorativa"
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="100vw"
          quality={100}
        />
      </div>
    </div>
  );
} 