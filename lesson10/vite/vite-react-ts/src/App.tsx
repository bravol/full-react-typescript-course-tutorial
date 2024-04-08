import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import List from "./components/List";
import { Section } from "./components/Section";

function App() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <Heading title="Hello" />
      <Section title="Different title">
        <p>This is my section</p>
      </Section>
      <Counter setCount={setCount}> Count is {count} </Counter>
      <List
        items={["☕ Coffee", "🌮 Tacos", "💻 Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </div>
  );
}

export default App;
