'use client';

import React, { useEffect } from 'react';

export default function DotPattern() {
  useEffect(() => {
    console.log('DotPattern montado - Versão simplificada');
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen z-20 pointer-events-none">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-[90%] h-[90%] bg-red-500 bg-opacity-20">
          <img
            src="/Anel.png"
            alt="Moldura decorativa"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
            onError={(e) => {
              console.error('Erro ao carregar a imagem:', e);
              console.error('Caminho da imagem:', '/Anel.png');
              (e.target as HTMLImageElement).src = '/assets/fallback.png';
            }}
            className="opacity-80"
          />
        </div>
      </div>
    </div>
  );
} 