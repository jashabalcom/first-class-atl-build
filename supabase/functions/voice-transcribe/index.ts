import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Process base64 in chunks to prevent memory issues
function processBase64Chunks(base64String: string, chunkSize = 32768) {
  const chunks: Uint8Array[] = [];
  let position = 0;
  
  while (position < base64String.length) {
    const chunk = base64String.slice(position, position + chunkSize);
    const binaryChunk = atob(chunk);
    const bytes = new Uint8Array(binaryChunk.length);
    
    for (let i = 0; i < binaryChunk.length; i++) {
      bytes[i] = binaryChunk.charCodeAt(i);
    }
    
    chunks.push(bytes);
    position += chunkSize;
  }

  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;

  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }

  return result;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { audio, projectType } = await req.json();
    
    if (!audio) {
      throw new Error('No audio data provided');
    }

    console.log('Processing audio transcription...');

    // Process audio in chunks
    const binaryAudio = processBase64Chunks(audio);
    
    // Prepare form data for Whisper
    const formData = new FormData();
    const blob = new Blob([binaryAudio], { type: 'audio/webm' });
    formData.append('file', blob, 'audio.webm');
    formData.append('model', 'whisper-1');

    // Send to OpenAI Whisper
    const whisperResponse = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
      },
      body: formData,
    });

    if (!whisperResponse.ok) {
      const errorText = await whisperResponse.text();
      console.error('Whisper API error:', errorText);
      throw new Error(`Whisper API error: ${errorText}`);
    }

    const whisperResult = await whisperResponse.json();
    const rawTranscript = whisperResult.text;

    console.log('Raw transcript:', rawTranscript);

    // Now polish/summarize with Lovable AI
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    const polishResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are a helpful assistant that polishes and summarizes home improvement project descriptions. 
Take the user's spoken description and turn it into a clear, concise, well-written project summary.
Keep the key details but make it professional and easy to read.
Don't add information that wasn't mentioned.
Keep it to 2-3 sentences maximum.
Don't use quotes or say "the customer wants" - write it in first person as if the customer wrote it.`
          },
          {
            role: 'user',
            content: `Polish this ${projectType || 'renovation'} project description from a voice recording:\n\n"${rawTranscript}"`
          }
        ],
      }),
    });

    if (!polishResponse.ok) {
      console.error('Polish API error:', await polishResponse.text());
      // Return raw transcript if polishing fails
      return new Response(
        JSON.stringify({ 
          rawTranscript, 
          polishedSummary: rawTranscript 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const polishResult = await polishResponse.json();
    const polishedSummary = polishResult.choices?.[0]?.message?.content || rawTranscript;

    console.log('Polished summary:', polishedSummary);

    return new Response(
      JSON.stringify({ 
        rawTranscript, 
        polishedSummary 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Voice transcribe error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
