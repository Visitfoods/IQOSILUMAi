"use client";

import {
  createClient,
  LiveClient,
  SOCKET_STATES,
  LiveTranscriptionEvents,
  type LiveSchema,
  type LiveTranscriptionEvent,
} from "@deepgram/sdk";

import { createContext, useContext, useState, ReactNode, FunctionComponent, useRef } from "react";

interface DeepgramContextType {
  connectToDeepgram: () => Promise<void>;
  disconnectFromDeepgram: () => void;
  connectionState: SOCKET_STATES;
  realtimeTranscript: string;
  error: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => Promise<string>;
}

const DeepgramContext = createContext<DeepgramContextType | undefined>(undefined);

interface DeepgramContextProviderProps {
  children: ReactNode;
}

const getApiKey = async (): Promise<string> => {
  const response = await fetch("/api/deepgram", { cache: "no-store" });
  const result = await response.json();
  return result.key;
};

const DeepgramContextProvider: FunctionComponent<DeepgramContextProviderProps> = ({ children }) => {
  const [connection, setConnection] = useState<WebSocket | null>(null);
  const [connectionState, setConnectionState] = useState<SOCKET_STATES>(SOCKET_STATES.closed);
  const [realtimeTranscript, setRealtimeTranscript] = useState("");
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<MediaRecorder | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  const connectToDeepgram = async () => {
    try {
      setError(null);
      setRealtimeTranscript("");
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioRef.current = new MediaRecorder(stream);

      const apiKey = await getApiKey();

      console.log("Opening WebSocket connection...");
      const socket = new WebSocket("wss://api.deepgram.com/v1/listen", ["token", apiKey]);

      socket.onopen = () => {
        setConnectionState(SOCKET_STATES.open);
        console.log("WebSocket connection opened");
        audioRef.current!.addEventListener("dataavailable", (event) => {
          if (event.data.size > 0 && socket.readyState === WebSocket.OPEN) {
            socket.send(event.data);
          }
        });

        audioRef.current!.start(250);
      };

      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.channel && data.channel.alternatives && data.channel.alternatives[0]) {
          const newTranscript = data.channel.alternatives[0].transcript;
          setRealtimeTranscript((prev) => prev + " " + newTranscript);
        }
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
        setError("Error connecting to Deepgram. Please try again.");
        disconnectFromDeepgram();
      };

      socket.onclose = (event) => {
        setConnectionState(SOCKET_STATES.closed);
        console.log("WebSocket connection closed:", event.code, event.reason);
      };

      setConnection(socket);
    } catch (error) {
      console.error("Error starting voice recognition:", error);
      setError(error instanceof Error ? error.message : "An unknown error occurred");
      setConnectionState(SOCKET_STATES.closed);
    }
  };

  const disconnectFromDeepgram = () => {
    if (connection) {
      connection.close();
      setConnection(null);
    }
    if (audioRef.current) {
      audioRef.current.stop();
    }
    setRealtimeTranscript("");
    setConnectionState(SOCKET_STATES.closed);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks(prev => [...prev, event.data]);
        }
      };

      recorder.start();
      setMediaRecorder(recorder);
    } catch (error) {
      console.error('Erro ao iniciar gravação:', error);
    }
  };

  const stopRecording = async (): Promise<string> => {
    return new Promise((resolve) => {
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
          // Aqui você pode implementar a chamada para a API do Deepgram
          // Por enquanto, vamos apenas retornar uma mensagem de placeholder
          resolve('Transcrição será implementada em breve');
          setAudioChunks([]);
        };
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
      } else {
        resolve('');
      }
    });
  };

  return (
    <DeepgramContext.Provider
      value={{
        connectToDeepgram,
        disconnectFromDeepgram,
        connectionState,
        realtimeTranscript,
        error,
        startRecording,
        stopRecording,
      }}
    >
      {children}
    </DeepgramContext.Provider>
  );
};

// Use the useDeepgram hook to access the deepgram context and use the deepgram in any component.
// This allows you to connect to the deepgram and disconnect from the deepgram via a socket.
// Make sure to wrap your application in a DeepgramContextProvider to use the deepgram.
function useDeepgram(): DeepgramContextType {
  const context = useContext(DeepgramContext);
  if (context === undefined) {
    throw new Error("useDeepgram must be used within a DeepgramContextProvider");
  }
  return context;
}

export {
  DeepgramContextProvider,
  useDeepgram,
  SOCKET_STATES,
  LiveTranscriptionEvents,
  type LiveTranscriptionEvent,
};
