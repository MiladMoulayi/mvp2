import Link from "next/link";
import { ReactNode } from "react";
import classes from "./button.module.css";

type ButtonProps = {
  link: string;
  onClick: any;
  children: ReactNode;
};

function Button(props: Partial<ButtonProps>) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
