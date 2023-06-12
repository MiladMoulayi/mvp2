"use client";

import { useState } from "react";
import JokeItem, { JokeItemProps } from "./JokeItem";

type JokesListProps = {
  jokes: JokeItemProps[];
};

export default function JokesList({ jokes }: JokesListProps) {
  const [jokesState, setJokesState] = useState<JokeItemProps[]>(jokes);

  return (
    <ul className="pl-4">
      {jokesState.map((joke: JokeItemProps) => (
        <JokeItem key={joke.id} {...joke} setJokesState={setJokesState} />
      ))}
    </ul>
  );
}
