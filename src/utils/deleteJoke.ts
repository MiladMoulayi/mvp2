"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/db";

export default async function deleteJoke(id: string) {
  await prisma.joke.delete({
    where: {
      id: id,
    },
  });

  redirect("/");
}
