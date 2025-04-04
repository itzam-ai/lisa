import { streamText } from "~/server/itzam";

type GenerateTextRequest = {
  input: string;
};

export async function POST(req: Request) {
  const { input } = (await req.json()) as GenerateTextRequest;

  if (!input) {
    return new Response("No input provided", { status: 400 });
  }

  const response = await streamText(input);

  return new Response(response);
}
