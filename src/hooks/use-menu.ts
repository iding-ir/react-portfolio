import { useEffect, useState } from "react";

export const useMenu = ({
  container,
  icon,
}: {
  container: HTMLElement | null;
  icon: HTMLElement | null;
}) => {
  const [isClosed, setIsClosed] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [iconWidth, setIconWidth] = useState(0);

  useEffect(() => {
    console.log("bbbb");

    if (!container) return;

    console.log("aaaa");
    const resizeObserver = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].target.getBoundingClientRect().width);
    });

    resizeObserver.observe(container);
  }, [container]);

  useEffect(() => {
    if (!icon) return;

    const resizeObserver = new ResizeObserver((entries) => {
      setIconWidth(entries[0].target.getBoundingClientRect().width);
    });

    resizeObserver.observe(icon);
  }, [icon]);

  const isPrimary = (index: number) => {
    console.log(
      containerWidth,
      iconWidth,
      index,
      (index + 1) * iconWidth < containerWidth
    );

    return (index + 1) * iconWidth < containerWidth;
  };

  return { isClosed, setIsClosed, isPrimary };
};
