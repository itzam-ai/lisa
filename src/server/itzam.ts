import Itzam from "itzam";
import { env } from "~/env";

const itzam = new Itzam(env.ITZAM_API_KEY);

export const streamText = async (input: string) => {
  const response = await itzam.streamText({
    input,
    workflowSlug: "lisa",
  });

  return response;
};
