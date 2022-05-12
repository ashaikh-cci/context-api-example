// import { useContext } from "react";
import { useStore } from "./models/count-context";

export default function ShowCount() {
  const countContext = useStore();
  return (
    <>
      <p>The count is {countContext.count}</p>
      <button onClick={countContext.incrementCounter}>Increment</button>
    </>
  );
}
