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

// Waveform visualization component
const AudioWaveform: React.FC<{ levels: number[]; isActive: boolean }> = ({ levels, isActive }) => {
  return (
    <div className="flex items-center justify-center gap-0.5 h-8 px-3">
      {levels.map((level, index) => (
        <div
          key={index}
          className={cn(
            "w-1 rounded-full transition-all duration-75",
            isActive ? "bg-destructive" : "bg-muted-foreground/30"
          )}
          style={{
            height: `${Math.max(4, level * 28)}px`,
            transform: isActive ? `scaleY(${0.3 + level * 0.7})` : 'scaleY(0.3)',
          }}
        />
      ))}
    </div>
  );
};

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
    audioLevels,
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
          <div className="flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive-foreground"></span>
            </span>
            <span className="hidden sm:inline">Recording... (tap to stop)</span>
            <span className="sm:hidden">Tap to stop</span>
          </div>
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
      {/* Waveform visualization */}
      {state === 'recording' && (
        <div className="flex items-center justify-center bg-destructive/10 rounded-lg py-2 animate-fade-in">
          <AudioWaveform levels={audioLevels} isActive={isRecording} />
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant={state === 'recording' ? 'destructive' : state === 'error' ? 'outline' : 'secondary'}
          onClick={state === 'recording' ? handleStopRecording : handleStartRecording}
          disabled={isDisabled}
          className={cn(
            "flex-1 transition-all duration-200",
            state === 'recording' && "shadow-lg"
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
