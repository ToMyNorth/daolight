import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

const systemPrompt = `You are an insightful tarot reader who blends Eastern philosophy with Western tarot tradition.
Interpret the three drawn cards as a cohesive narrative about Past, Present, and Future — not isolated meanings.
Use vivid, storytelling language with visual imagery.
Frame insights as "possibilities to explore" rather than fixed outcomes.
Weave in occasional Eastern wisdom references (I Ching, Taoism, Buddhism) to give a unique perspective.
Address the user's question (if provided) and connect all three cards into practical guidance.
Keep responses to 400-600 words.
Structure your response with clear sections using markdown headers.`;

export async function POST(req: Request) {
  const body = await req.json();
  const {
    cards,
    question,
  }: {
    cards: Array<{
      name: string;
      number: number;
      arcana: string;
      suit?: string;
      emoji: string;
      keywords: string[];
      isReversed: boolean;
      position: string;
      uprightMeaning: string;
      reversedMeaning: string;
    }>;
    question: string;
  } = body;

  const cardDescriptions = cards
    .map(
      (c) =>
        `**${c.position}: ${c.emoji} ${c.name}** (${c.isReversed ? "Reversed" : "Upright"})
- ${c.arcana === "major" ? `Major Arcana #${c.number}` : `${c.suit} #${c.number}`}
- Keywords: ${c.keywords.join(", ")}
- Meaning: ${c.isReversed ? c.reversedMeaning : c.uprightMeaning}`
    )
    .join("\n\n");

  const userMessage = question
    ? `The seeker asks: "${question}"\n\n${cardDescriptions}`
    : `A general reading is requested.\n\n${cardDescriptions}`;

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
