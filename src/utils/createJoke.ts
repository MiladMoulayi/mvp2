"use server";

import { prisma } from "@/db";
import { redirect } from "next/navigation";

export default async function createJoke(data: FormData) {
  const title = data.get("title")?.valueOf();
  const setup = data.get("setup")?.valueOf();
  const punchline = data.get("punchline")?.valueOf();

  if (
    typeof title !== "string" ||
    title.length === 0 ||
    typeof setup !== "string" ||
    setup.length === 0 ||
    typeof punchline !== "string" ||
    punchline.length === 0
  ) {
    throw new Error("Invalid Title");
  }

  await prisma.joke.create({
    data: {
      title,
      setup,
      punchline,
    },
  });
  redirect("/");
}
