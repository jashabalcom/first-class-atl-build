import React, { useState } from 'react';
import { Mic, MicOff, Loader2, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVoiceRecording } from '@/hooks/useVoiceRecording';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface VoiceRecorderProps {
  onTranscription: (text: string) => void;
  projectType?: string;
  className?: string;
}

type RecordingState = 'idle' | 'recording' | 'processing' | 'transcribing' | 'polishing' | 'complete' | 'error';

const VoiceRecorder: React.FC<VoiceRecorderProps> = ({ 
  onTranscription, 
  projectType,
  className 
}) => {
  const [state, setState] = useState<RecordingState>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { 
    isRecording, 
    startRecording, 
    stopRecording, 
    cancelRecording,
    error: recordingError 
  } = useVoiceRecording({
    maxDuration: 60,
    onError: (err) => {
      setErrorMessage(err);
      setState('error');
    }
  });

  const handleStartRecording = async () => {
    setErrorMessage(null);
    setState('recording');
    await startRecording();
  };

  const handleStopRecording = async () => {
    setState('processing');
    const audioBase64 = await stopRecording();
    
    if (!audioBase64) {
      setState('error');
      setErrorMessage('No audio captured');
      return;
    }

    setState('transcribing');

    try {
      const { data, error } = await supabase.functions.invoke('voice-transcribe', {
        body: { audio: audioBase64, projectType }
      });

      if (error) {
        throw error;
      }

      if (data?.polishedSummary) {
        setState('complete');
        onTranscription(data.polishedSummary);
        
        // Reset to idle after showing success
        setTimeout(() => setState('idle'), 2000);
      } else {
        throw new Error('No transcription received');
      }
    } catch (err) {
      console.error('Transcription error:', err);
      setState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Transcription failed');
    }
  };

  const handleCancel = () => {
    cancelRecording();
    setState('idle');
    setErrorMessage(null);
  };

  const getButtonContent = () => {
    switch (state) {
      case 'recording':
        return (
          <>
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </span>
            Recording... (tap to stop)
          </>
        );
      case 'processing':
        return (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Processing...
          </>
        );
      case 'transcribing':
        return (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Transcribing...
          </>
        );
      case 'polishing':
        return (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            AI polishing...
          </>
        );
      case 'complete':
        return (
          <>
            <Check className="h-4 w-4 mr-2 text-green-500" />
            Got it!
          </>
        );
      case 'error':
        return (
          <>
            <MicOff className="h-4 w-4 mr-2" />
            Try again
          </>
        );
      default:
        return (
          <>
            <Mic className="h-4 w-4 mr-2" />
            Speak Your Vision
          </>
        );
    }
  };

  const isDisabled = state === 'processing' || state === 'transcribing' || state === 'polishing' || state === 'complete';

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant={state === 'recording' ? 'destructive' : state === 'error' ? 'outline' : 'secondary'}
          onClick={state === 'recording' ? handleStopRecording : handleStartRecording}
          disabled={isDisabled}
          className={cn(
            "flex-1 transition-all duration-200",
            state === 'recording' && "animate-pulse"
          )}
        >
          {getButtonContent()}
        </Button>
        
        {state === 'recording' && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleCancel}
            className="shrink-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {errorMessage && (
        <p className="text-sm text-destructive">{errorMessage}</p>
      )}

      {state === 'idle' && (
        <p className="text-xs text-muted-foreground text-center">
          Describe your project vision — AI will polish it for you
        </p>
      )}
    </div>
  );
};

export default VoiceRecorder;
