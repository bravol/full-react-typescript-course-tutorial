import { ReactNode } from "react";

interface Props<T> {
  items: T[];
  render: (item: T) => ReactNode;
}
const List = <T,>({ items, render }: Props<T>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
