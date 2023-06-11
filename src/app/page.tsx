import { JokeItem } from "@/components/JokeItem";
import { prisma } from "@/db";
import Link from "next/link";

function getJokes() {
  return prisma.joke.findMany();
}

export default async function Home() {
  const jokes = await getJokes();
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Jokes</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {jokes.map((joke) => (
          <JokeItem key={joke.id} {...joke} />
        ))}
      </ul>
    </>
  );
}
