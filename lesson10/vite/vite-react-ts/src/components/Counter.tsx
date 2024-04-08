import { useState } from "react";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState<number | null>(0);
  return <div>Counter</div>;
};

export default Counter;
