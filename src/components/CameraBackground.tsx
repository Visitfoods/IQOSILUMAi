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
          facingMode: 'environment',
          width: { ideal: 1920 },
          height: { ideal: 1080 }
        },
        audio: false
      });

      console.log("Acesso à câmera concedido!");

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play()
            .then(() => {
              console.log("Vídeo iniciado com sucesso!");
              setHasPermission(true);
              setError(null);
            })
            .catch((e) => {
              console.error("Erro ao iniciar playback:", e);
              setError("Erro ao iniciar vídeo.");
              setHasPermission(false);
            });
        };
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
    let mounted = true;

    const initCamera = async () => {
      await setupCamera();
    };

    initCamera();

    return () => {
      mounted = false;
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => {
          track.stop();
          stream.removeTrack(track);
        });
        videoRef.current.srcObject = null;
      }
    };
  }, []);

  // Estado de erro - permissão negada ou outro erro
  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 flex items-center justify-center text-white text-center p-4 bg-black">
        <p className="text-red-400 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  // Câmera ativa ou aguardando permissão
  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover"
      />
      <div className="fixed inset-0 bg-black/10" /> {/* Overlay preto com 10% de opacidade */}
    </div>
  );
} 