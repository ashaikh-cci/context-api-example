import ShowCount from "./show-count";
import "./styles.css";
import { CountProvider } from "./models/count-context";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <CountProvider value={{ count, incrementCounter }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <ShowCount />
      </div>
    </CountProvider>
  );
}
