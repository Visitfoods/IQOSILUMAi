"use client";

import { useEffect, useRef, useState } from 'react';

export default function CameraBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const setupCamera = async () => {
    try {
      console.log("Iniciando configuração da câmera...");
      
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Este navegador não suporta acesso à câmera");
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      console.log("Acesso à câmera concedido!");

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        try {
          await videoRef.current.play();
          console.log("Vídeo iniciado com sucesso!");
          setHasPermission(true);
          setError(null);
        } catch (e) {
          console.error("Erro ao iniciar playback:", e);
          setError("Erro ao iniciar vídeo.");
          setHasPermission(false);
        }
      }
    } catch (err) {
      console.error("Erro ao configurar câmera:", err);
      
      let errorMessage = "Erro ao acessar a câmera";
      if (err instanceof Error) {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          errorMessage = "Acesso à câmera negado. Por favor, permita o acesso nas configurações do navegador.";
        } else if (err.name === 'NotFoundError') {
          errorMessage = "Nenhuma câmera encontrada.";
        } else if (err.name === 'NotReadableError' || err.name === 'AbortError') {
          errorMessage = "Câmera em uso por outro aplicativo.";
        }
      }
      
      setError(errorMessage);
      setHasPermission(false);
    }
  };

  useEffect(() => {
    setupCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Estado inicial - aguardando permissão
  if (hasPermission === null) {
    return (
      <div className="fixed inset-0 flex items-center justify-center text-white text-center p-4">
        <div className="animate-pulse">
          <p className="text-lg font-semibold">A aguardar acesso à câmera...</p>
        </div>
      </div>
    );
  }

  // Estado de erro - permissão negada ou outro erro
  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 flex items-center justify-center text-white text-center p-4">
        <p className="text-red-400 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  // Câmera ativa
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover transform scale-x-[-1]"
      />
    </div>
  );
} 