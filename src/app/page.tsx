import JokesList from "@/components/JokesList";
import getJokes from "@/utils/getJokes";
import Link from "next/link";

export default async function Home() {
  // const [jokesList, setJokesList] = useState([]);
  const jokes = await getJokes();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Jokes</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          New
        </Link>
      </header>
      <JokesList jokes={jokes} />
    </>
  );
}
