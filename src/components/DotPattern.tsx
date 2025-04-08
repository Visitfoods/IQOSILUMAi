'use client';

import React, { useEffect } from 'react';

export default function DotPattern() {
  useEffect(() => {
    console.log('DotPattern montado - Usando tag img padrão');
    
    // Verificar se o arquivo existe
    fetch('/Anel.png')
      .then(response => {
        if (response.ok) {
          console.log('A imagem existe no servidor!', response.status);
        } else {
          console.error('A imagem NÃO existe no servidor!', response.status);
        }
      })
      .catch(error => {
        console.error('Erro ao verificar a imagem:', error);
      });
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[800px] h-[800px] max-w-[90vw] max-h-[90vh] border border-white">
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
            console.error('Erro ao carregar a imagem com tag HTML:', e);
            // Tentativa com caminho absoluto
            (e.target as HTMLImageElement).src = window.location.origin + '/Anel.png';
          }}
          onLoad={() => {
            console.log('Imagem carregada com sucesso usando tag HTML');
          }}
          className="opacity-80"
        />
      </div>
    </div>
  );
} 