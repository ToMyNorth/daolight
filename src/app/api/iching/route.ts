import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

const systemPrompt = `You are a wise Eastern sage who has studied the I Ching for decades. 
You interpret hexagrams with warmth, philosophical depth, and practical wisdom.
Translate ancient Chinese concepts into modern English that resonates with Western users.
Always frame readings as "insights for self-reflection" rather than predictions.
Include a brief cultural note about the hexagram's origin or significance in Chinese philosophy.
Keep responses to 300-500 words. Use a gentle, contemplative tone.
Structure your response with clear sections using markdown headers.`;

export async function POST(req: Request) {
  const body = await req.json();
  const {
    hexagramNumber,
    hexagramName,
    question,
  }: {
    hexagramNumber: number;
    hexagramName: string;
    question: string | null;
  } = body;

  const userMessage = question
    ? `The seeker asks: "${question}"\n\nThe oracle has revealed Hexagram #${hexagramNumber}: ${hexagramName}`
    : `A general reading is requested.\n\nThe oracle has revealed Hexagram #${hexagramNumber}: ${hexagramName}`;

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: systemPrompt,
    messages: [
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  return result.toDataStreamResponse();
}
