import { useEffect, useRef } from "react";

export const useClickOutside = <T extends HTMLElement>({
  onClick,
}: {
  onClick: () => void;
}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick]);

  return ref;
};
