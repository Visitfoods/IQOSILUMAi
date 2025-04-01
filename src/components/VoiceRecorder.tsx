"use client";

import { useState, useEffect } from 'react';
import { useDeepgram } from '../lib/contexts/DeepgramContext';
import { motion } from 'framer-motion';

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const { startRecording, stopRecording } = useDeepgram();

  const handleStartRecording = async () => {
    setIsRecording(true);
    await startRecording();
  };

  const handleStopRecording = async () => {
    setIsRecording(false);
    const result = await stopRecording();
    if (result) {
      setTranscript(result);
      // Aqui você pode implementar sua própria lógica para salvar o transcript
      console.log('Transcript:', result);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
        className={`px-6 py-3 rounded-full font-medium text-white transition-colors ${
          isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isRecording ? 'Parar Gravação' : 'Iniciar Gravação'}
      </motion.button>

      {transcript && (
        <div className="w-full max-w-2xl mt-4">
          <h3 className="text-lg font-semibold mb-2">Transcrição:</h3>
          <p className="p-4 bg-gray-100 rounded-lg">{transcript}</p>
        </div>
      )}
    </div>
  );
}