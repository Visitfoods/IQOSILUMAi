'use client';

import React, { useEffect, useState } from 'react';

export default function DotPattern() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // 768px é o breakpoint padrão para dispositivos móveis
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 pointer-events-none">
      {/* Imagem como background */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'url(/Anel.png)',
          backgroundSize: isMobile ? '100% 100%' : '105% 120%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          transform: isMobile ? 'scale(0.95)' : 'scaleY(1.15) scaleX(1.02) translateY(-10%)',
        }}
      />
    </div>
  );
} 