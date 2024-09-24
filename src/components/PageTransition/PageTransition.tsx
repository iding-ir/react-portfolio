import { useEffect, useState } from "react";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import { getCssVariable } from "../../utils/get-css-variable";
import styles from "./PageTransition.module.scss";

export const PageTransition = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const [effect, setEffect] = useState<"fade" | "slide">();
  const classNames = clsx(styles.container, {
    [styles.active]: active,
    [styles.fade]: effect === "fade",
    [styles.slide]: effect === "slide",
  });

  useEffect(() => {
    setActive(true);
    setEffect(Math.random() > 0.5 ? "fade" : "slide");

    const timeout = setTimeout(
      () => setActive(false),
      Number(getCssVariable("--page-transition-duration").replace("ms", ""))
    );

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <div className={classNames} />;
};
