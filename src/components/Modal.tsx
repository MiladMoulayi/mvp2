import React from "react";
import classes from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  editTitle: string;
  setEditTitle: React.Dispatch<React.SetStateAction<string>>;
  editSetup: string;
  setEditSetup: React.Dispatch<React.SetStateAction<string>>;
  editPunchline: string;
  setEditPunchline: React.Dispatch<React.SetStateAction<string>>;
}

function Modal(props: ModalProps) {
  const {
    onClose,
    onSubmit,
    editTitle,
    setEditTitle,
    editSetup,
    setEditSetup,
    editPunchline,
    setEditPunchline,
  } = props;

  return (
    <div className={classes.modal}>
      <div className={classes.modalcontent}>
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">Edit</h1>
        </header>
        <form onSubmit={onSubmit} className="flex gap-2 flex-col">
          <label htmlFor="title">Name your Joke: </label>
          <input
            id="title"
            name="title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          />
          <label htmlFor="setup">Set us up for laughter:</label>
          <textarea
            id="setup"
            name="setup"
            value={editSetup}
            onChange={(e) => setEditSetup(e.target.value)}
            className={classes.textarea}
          />
          <label htmlFor="punchline">
            I hope this punchline was worth it...
          </label>
          <input
            id="punchline"
            name="punchline"
            value={editPunchline}
            onChange={(e) => setEditPunchline(e.target.value)}
            className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
          />
          <div className="flex gap-1 justify-end">
            <button
              onClick={onClose}
              type="button"
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded
      hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="border border-slate-300 text-slate-300 px-2 py-1 rounded
      hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
