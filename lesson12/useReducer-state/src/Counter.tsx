import { ReactNode, useState } from "react";

type Props = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: Props) => {
  const [count, setCount] = useState<number>(1);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <div>
      <h1>{children(count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
