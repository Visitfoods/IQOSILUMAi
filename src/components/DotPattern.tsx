'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

export default function DotPattern() {
  useEffect(() => {
    console.log('DotPattern montado - Verificando se a imagem está carregando');
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center">
      <div className="relative w-[800px] h-[800px] max-w-[90vw] max-h-[90vh]">
        <Image
          src="/Anel.png"
          alt="Moldura decorativa"
          width={800}
          height={800}
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
          priority
          onError={(e) => {
            console.error('Erro ao carregar a imagem:', e);
          }}
          onLoad={() => {
            console.log('Imagem carregada com sucesso');
          }}
          className="opacity-80"
        />
      </div>
    </div>
  );
} 