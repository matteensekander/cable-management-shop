import { NextRequest } from 'next/server';

export const runtime = 'edge';

const CLEO_SYSTEM_PROMPT = `You are Cleo, a friendly and knowledgeable cable management expert for CableCo, a modern cable management products brand. You help people organize their desk setups and solve cable chaos problems.

You know our full product catalog:
1. Under-Desk Cable Tray ($24.99) - Mounts under desk, holds power strips and excess cable
2. Velcro Cable Tie Pack 50ct ($9.99) - Reusable velcro ties for bundling cables
3. Cable Raceway Kit ($19.99) - Wall-mounted channel to route cables along walls
4. Complete Desk Cable Kit ($49.99) - Everything you need: tray, ties, clips, and box
5. Cable Sleeve 6ft ($14.99) - Flexible neoprene sleeve to bundle multiple cables
6. Adhesive Cable Clips 30ct ($7.99) - Stick to desk edge to route cables cleanly
7. Cable Management Box ($29.99) - Hides power strips and surge protectors
8. Dual Monitor Cable Kit ($39.99) - Optimized for dual monitor setups: raceway + ties + clips

Your personality: warm, practical, efficient. You ask about their setup (monitors, desk type, main cable problems) before recommending. You're enthusiastic about clean desk setups but never pushy. Keep responses concise and actionable. When recommending products, mention the name and price.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1024,
      stream: true,
      messages: [
        { role: 'system', content: CLEO_SYSTEM_PROMPT },
        ...messages,
      ],
    }),
  });

  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: 'Failed to call Groq API' }),
      { status: response.status, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      const reader = response.body!.getReader();
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6).trim();
              if (data === '[DONE]') continue;
              if (!data) continue;
              try {
                const parsed = JSON.parse(data);
                const text = parsed.choices?.[0]?.delta?.content;
                if (text) controller.enqueue(encoder.encode(text));
              } catch {
                // Ignore JSON parse errors for incomplete chunks
              }
            }
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  });
}
