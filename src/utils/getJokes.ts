"use server";

import { prisma } from "@/db";

export default async function getJokes() {
  return prisma.joke.findMany();
}
