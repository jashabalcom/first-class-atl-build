import { useState, useRef, useCallback } from 'react';

interface UseVoiceRecordingOptions {
  maxDuration?: number; // in seconds
  onError?: (error: string) => void;
}

interface UseVoiceRecordingReturn {
  isRecording: boolean;
  isProcessing: boolean;
  error: string | null;
  startRecording: () => Promise<void>;
  stopRecording: () => Promise<string | null>;
  cancelRecording: () => void;
}

export function useVoiceRecording(options: UseVoiceRecordingOptions = {}): UseVoiceRecordingReturn {
  const { maxDuration = 60, onError } = options;
  
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const cleanup = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    mediaRecorderRef.current = null;
    chunksRef.current = [];
  }, []);

  const startRecording = useCallback(async () => {
    try {
      setError(null);
      
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        }
      });
      
      streamRef.current = stream;
      chunksRef.current = [];
      
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.start(100); // Collect data every 100ms
      setIsRecording(true);
      
      // Auto-stop after max duration
      timeoutRef.current = setTimeout(() => {
        if (mediaRecorderRef.current?.state === 'recording') {
          stopRecording();
        }
      }, maxDuration * 1000);
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to access microphone';
      setError(errorMessage);
      onError?.(errorMessage);
      cleanup();
    }
  }, [maxDuration, onError, cleanup]);

  const stopRecording = useCallback(async (): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!mediaRecorderRef.current || mediaRecorderRef.current.state !== 'recording') {
        setIsRecording(false);
        cleanup();
        resolve(null);
        return;
      }

      setIsProcessing(true);
      
      mediaRecorderRef.current.onstop = async () => {
        setIsRecording(false);
        
        if (chunksRef.current.length === 0) {
          setError('No audio recorded');
          setIsProcessing(false);
          cleanup();
          resolve(null);
          return;
        }
        
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        
        // Convert to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = (reader.result as string).split(',')[1];
          setIsProcessing(false);
          cleanup();
          resolve(base64);
        };
        reader.onerror = () => {
          setError('Failed to process audio');
          setIsProcessing(false);
          cleanup();
          resolve(null);
        };
        reader.readAsDataURL(audioBlob);
      };
      
      mediaRecorderRef.current.stop();
    });
  }, [cleanup]);

  const cancelRecording = useCallback(() => {
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    setIsRecording(false);
    setIsProcessing(false);
    cleanup();
  }, [cleanup]);

  return {
    isRecording,
    isProcessing,
    error,
    startRecording,
    stopRecording,
    cancelRecording,
  };
}
