"use server";

import type { Toy } from "@/components/toy-config-form";

export async function generateImage(toy: Toy): Promise<string> {
  //   ToDo: Use Fal.AI API to generate an image of the Toy configuration
  console.log({ toy });
  return "https://placehold.co/600x400";
}
