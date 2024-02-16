import { useEffect, useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export function useLocalStorage({ key, initialValue = "" }) {
  //gets initial data from disk, if none then use initialValue
  const [state, setState] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  //detect if anything changes, if it does then store on disk
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  //expose methods
  return [state, setState];
}
