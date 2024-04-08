import Heading from "./components/Heading";
import { Section } from "./components/Section";

function App() {
  return (
    <div>
      <Heading title="Hello" />
      <Section title="Different title">
        <p>This is my section</p>
      </Section>
    </div>
  );
}

export default App;
