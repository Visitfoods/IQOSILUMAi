"use client";

import { useEffect, useRef, useState } from 'react';

export default function CameraBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  const setupCamera = async () => {
    try {
      // Logs para debug
      console.log("Iniciando configuração da câmera...");
      console.log("Ambiente:", {
        protocol: window.location.protocol,
        host: window.location.host,
        isSecure: window.isSecureContext,
        userAgent: window.navigator.userAgent
      });

      // Verifica se o navegador suporta getUserMedia
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("Este navegador não suporta acesso à câmera");
      }

      // Solicita acesso à câmera com configurações específicas para móvel
      console.log("Solicitando acesso à câmera...");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user', // Usa a câmera frontal
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      console.log("Acesso à câmera concedido!");

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        
        // Tenta iniciar o vídeo imediatamente
        try {
          await videoRef.current.play();
          console.log("Vídeo iniciado com sucesso!");
          setHasPermission(true);
          setError(null);
        } catch (e) {
          console.error("Erro ao iniciar playback:", e);
          setError("Erro ao iniciar vídeo. Toque na tela para tentar novamente.");
        }
      }
    } catch (err) {
      console.error("Erro ao configurar câmera:", err);
      
      let errorMessage = "Erro ao acessar a câmera";
      if (err instanceof Error) {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          errorMessage = "Acesso à câmera negado. Por favor, permita o acesso nas configurações do navegador.";
        } else if (err.name === 'NotFoundError') {
          errorMessage = "Nenhuma câmera encontrada. Verifique se há uma câmera conectada.";
        } else if (err.name === 'NotReadableError' || err.name === 'AbortError') {
          errorMessage = "Câmera em uso por outro aplicativo ou inacessível.";
        } else {
          errorMessage = `Erro: ${err.message}`;
        }
      }
      
      setError(errorMessage);
      setHasPermission(false);
    }
  };

  useEffect(() => {
    // Inicia a câmera automaticamente ao montar o componente
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
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="fixed inset-0 flex items-center justify-center text-white text-center p-4">
          <div className="animate-pulse">
            <p className="text-lg font-semibold mb-2">A aguardar acesso à câmera...</p>
            <p className="text-sm mt-2 opacity-75">
              Se aparecer um diálogo de permissão, por favor aceite.
              <br />
              Se não aparecer, verifique as permissões do seu navegador.
            </p>
            <button
              onClick={setupCamera}
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Estado de erro - permissão negada ou outro erro
  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="fixed inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <div>
            {error ? (
              <>
                <p className="text-red-400 text-lg font-semibold mb-2">Erro na câmera:</p>
                <p className="mb-4">{error}</p>
              </>
            ) : (
              <p className="mb-4 text-lg">Acesso à câmera negado</p>
            )}
            <p className="text-sm opacity-75 mb-4">
              Verifique as permissões da câmera nas configurações do seu navegador
            </p>
            <button
              onClick={setupCamera}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Câmera ativa
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50" />
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover transform scale-x-[-1]"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
} 