"use client";

import createJoke from "@/utils/createJoke";
import Link from "next/link";
import classes from "./JokeForm.module.css";

export default function JokeForm() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createJoke} className="flex gap-2 flex-col">
        <label htmlFor="title">Name your Joke: </label>
        <input
          id="title"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <label htmlFor="setup">Set us up for laughter:</label>
        <textarea id="setup" name="setup" className={classes.textarea} />
        <label htmlFor="punchline">I hope this punchline was worth it...</label>
        <input
          id="punchline"
          name="punchline"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href=".."
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
