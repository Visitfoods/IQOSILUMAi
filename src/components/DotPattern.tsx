'use client';

import React from 'react';
import Image from 'next/image';

export default function DotPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Image
        src="/Anel.png"
        alt="Moldura decorativa"
        fill
        style={{ objectFit: 'contain' }}
        priority
      />
    </div>
  );
} 