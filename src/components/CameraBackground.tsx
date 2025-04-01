"use client";

import { useEffect, useRef, useState } from 'react';

export default function CameraBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const setupCamera = async () => {
      try {
        console.log("Verificando ambiente...");
        console.log("Protocolo:", window.location.protocol);
        console.log("Host:", window.location.host);
        console.log("Contexto seguro:", window.isSecureContext);

        // Verifica se estamos num contexto seguro
        if (!window.isSecureContext) {
          console.warn("Contexto não seguro - a API da câmera pode não funcionar");
        }

        // Tenta obter mediaDevices de várias formas
        if (!navigator.mediaDevices) {
          console.log("mediaDevices não encontrado, tentando fallback...");
          // @ts-ignore - Ignorando erro de tipo para suportar navegadores antigos
          navigator.mediaDevices = {};
        }

        // Tenta usar o getUserMedia legado se necessário
        if (!navigator.mediaDevices.getUserMedia) {
          const legacyGetUserMedia = navigator.getUserMedia ||
            // @ts-ignore
            navigator.webkitGetUserMedia ||
            // @ts-ignore
            navigator.mozGetUserMedia ||
            // @ts-ignore
            navigator.msGetUserMedia;

          if (legacyGetUserMedia) {
            console.log("Usando API legada getUserMedia");
            navigator.mediaDevices.getUserMedia = function(constraints) {
              return new Promise((resolve, reject) => {
                legacyGetUserMedia.call(navigator, constraints, resolve, reject);
              });
            };
          } else {
            throw new Error("Nenhum método getUserMedia encontrado");
          }
        }

        console.log("Tentando listar dispositivos...");
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const videoDevices = devices.filter(device => device.kind === 'videoinput');
          console.log("Câmeras disponíveis:", videoDevices.length);
          videoDevices.forEach((device, index) => {
            console.log(`Câmera ${index + 1}:`, {
              id: device.deviceId,
              label: device.label || `Câmera ${index + 1}`
            });
          });
        } catch (enumError) {
          console.warn("Não foi possível listar dispositivos:", enumError);
        }

        console.log("Solicitando acesso à câmera...");
        const constraints = {
          video: {
            facingMode: { ideal: "user" },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log("Stream obtido com sucesso");

        if (!isMounted) return;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          
          try {
            await videoRef.current.play();
            console.log("Vídeo iniciado com sucesso");
            setHasPermission(true);
          } catch (playError) {
            console.error("Erro ao iniciar vídeo:", playError);
            throw playError;
          }
        } else {
          throw new Error("Elemento de vídeo não disponível");
        }
      } catch (err) {
        if (!isMounted) return;

        console.error("Erro completo:", err);

        let errorMessage = "Erro ao acessar a câmera";
        if (err instanceof Error) {
          if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
            errorMessage = "Acesso à câmera negado. Por favor, permita o acesso nas configurações do navegador e use uma conexão segura (HTTPS).";
          } else if (err.name === 'NotFoundError') {
            errorMessage = "Nenhuma câmera encontrada. Verifique se há uma câmera conectada.";
          } else if (err.name === 'NotReadableError' || err.name === 'AbortError') {
            errorMessage = "Câmera em uso por outro aplicativo ou inacessível.";
          } else if (err.name === 'SecurityError') {
            errorMessage = "Erro de segurança. Certifique-se de estar usando HTTPS.";
          } else {
            errorMessage = `Erro: ${err.message}`;
          }
        }
        
        setError(errorMessage);
        setHasPermission(false);
      }
    };

    setupCamera();

    return () => {
      isMounted = false;
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  if (hasPermission === null) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="fixed inset-0 flex items-center justify-center text-white text-center p-4">
          <div className="animate-pulse">
            <p>A aguardar acesso à câmera...</p>
            <p className="text-sm mt-2 opacity-75">Se aparecer um diálogo de permissão, por favor aceite.</p>
          </div>
        </div>
      </div>
    );
  }

  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-black/25" />
        <div className="fixed inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          {error ? (
            <>
              <p className="text-red-400 mb-2">Erro na câmera:</p>
              <p className="mb-4">{error}</p>
            </>
          ) : (
            <p className="mb-4">Acesso à câmera negado</p>
          )}
          <p className="text-sm opacity-75">
            Verifique as permissões da câmera nas configurações do seu navegador e recarregue a página
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50" />
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 min-w-full min-h-full w-auto h-auto object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
} 