import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [dark, setDark] = useState(false);
  const listener = (event) => {
    setDark("Event ocurred.", event.matches);
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", listener);

    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", listener);
  }, []);

  return dark;
};
