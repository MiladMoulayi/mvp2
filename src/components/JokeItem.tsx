"use client";

import deleteJoke from "@/utils/deleteJoke";
import editJoke from "@/utils/editJoke";
import React, { useState } from "react";
import Button from "../ui/button";
import classes from "./JokeItem.module.css";
import Modal from "./Modal";

export type JokeItemProps = {
  id: string;
  title: string;
  setup: string;
  punchline: string;
};

export default function JokeItem(
  props: JokeItemProps & {
    setJokesState: React.Dispatch<React.SetStateAction<JokeItemProps[]>>;
  }
) {
  const { title, setup, punchline, id, setJokesState } = props;
  const [punchlineVisible, setPunchlineVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editSetup, setEditSetup] = useState(setup);
  const [editPunchline, setEditPunchline] = useState(punchline);

  const handleDelete = async (id: string) => {
    const success = await deleteJoke(id);
    if (success) {
      setJokesState((prevJokes: JokeItemProps[]) =>
        prevJokes.filter((joke: JokeItemProps) => joke.id !== id)
      );
    }
  };
  const handleEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await editJoke(id, editTitle, editSetup, editPunchline);
    if (success) {
      setJokesState((prevJokes: JokeItemProps[]) =>
        prevJokes.map((joke: JokeItemProps) =>
          joke.id === id
            ? {
                ...joke,
                title: editTitle,
                setup: editSetup,
                punchline: editPunchline,
              }
            : joke
        )
      );
      setIsModalOpen(false);
    }
  };

  if (punchlineVisible) {
    return (
      <li className={classes.item}>
        <div className={classes.content}>
          <div className={classes.summary}>
            <h2 className="text-2xl">{title}</h2>
          </div>
          <div>{punchline}</div>
          <div className={classes.actions}>
            <Button onClick={() => setPunchlineVisible(!punchlineVisible)}>
              <span>
                {punchlineVisible ? "Hide Punchline" : "See Punchline"}
              </span>
            </Button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className="text-2xl">{title}</h2>
        </div>
        <div>{setup}</div>
        <div className={classes.actions}>
          <Button onClick={() => setPunchlineVisible(!punchlineVisible)}>
            <span>{punchlineVisible ? "Hide Punchline" : "See Punchline"}</span>
          </Button>
          <Button onClick={async () => await handleDelete(id)}>
            <span>Delete Joke</span>
          </Button>
          <Button onClick={() => setIsModalOpen(true)}>
            <span>Edit Joke</span>
          </Button>
          {isModalOpen && (
            <Modal
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editSetup={editSetup}
              setEditSetup={setEditSetup}
              editPunchline={editPunchline}
              setEditPunchline={setEditPunchline}
            />
          )}
        </div>
      </div>
    </li>
  );
}
