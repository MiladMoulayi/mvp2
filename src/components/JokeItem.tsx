"use client";

import { useState } from "react";
import Button from "../ui/button";
import classes from "./joke-item.module.css";

type JokeItemProps = {
  id: string;
  title: string;
  setup: string;
  punchline: string;
};

export default function JokeItem(props: JokeItemProps) {
  const { title, setup, punchline, id } = props;
  const [punchlineVisible, setPunchlineVisible] = useState(false);

  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
      </div>
      <div>{setup}</div>
      <div>{punchlineVisible ? punchline : null}</div>
      <div className={classes.actions}>
        <Button onClick={() => setPunchlineVisible(!punchlineVisible)}>
          <span>{punchlineVisible ? "Hide Punchline" : "See Punchline"}</span>
          <span className={classes.icon}></span>
        </Button>
      </div>
    </li>
  );
}
