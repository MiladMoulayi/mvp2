"use server";

import { prisma } from "@/db";

export default async function editJoke(
  id: string,
  title: string,
  setup: string,
  punchline: string
): Promise<boolean> {
  try {
    await prisma.joke.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        setup: setup,
        punchline: punchline,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to update joke with id: " + id, error);
    return false;
  }
}
