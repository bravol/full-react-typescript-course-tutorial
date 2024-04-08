import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;
function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("mounting");
    console.log("Users:", users);
    return () => console.log("unmounting");
  }, [users]);

  //usecallback memorise a function
  const addTow = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
      setCount((prev) => prev + 2);
    },
    []
  );

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={addTow}>AddTwo</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
