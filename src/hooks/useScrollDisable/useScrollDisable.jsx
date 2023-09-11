import { useEffect } from "react";

export const useScrollDisable = (disable) => {
  useEffect(() => {
    document.body.style.overflow = disable ? "hidden" : "auto";
  }, [disable]);
};
