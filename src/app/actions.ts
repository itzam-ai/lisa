"use server";

import Itzam from "itzam";
import { env } from "~/env";

const itzam = new Itzam(env.ITZAM_API_KEY);

export async function sendMessageToLisa(input: string) {
  const response = await itzam.streamText({
    input,
    workflowSlug: "lisa",
  });

  return response;
}
