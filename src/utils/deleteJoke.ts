"use server";

import { prisma } from "@/db";

export default async function deleteJoke(id: string): Promise<boolean> {
  try {
    await prisma.joke.delete({
      where: {
        id: id,
      },
    });
    return true;
  } catch (error) {
    console.error("Failed to delete joke with id: " + id, error);
    return false;
  }
}
