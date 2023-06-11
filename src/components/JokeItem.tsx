type JokeItemProps = {
  id: string;
  title: string;
  setup: string;
  punchline: string;
};

export function JokeItem({ id, title, setup, punchline }: JokeItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} className="cursor-pointer peer" />
      <label htmlFor={id}>{title}</label>
    </li>
  );
}
