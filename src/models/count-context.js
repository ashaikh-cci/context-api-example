import { createContext, useContext } from "react";

export const CountContext = createContext({
  count: null,
  incrementCounter: () => {}
});

export const CountProvider = CountContext.Provider;

export const useStore = () => useContext(CountContext);
