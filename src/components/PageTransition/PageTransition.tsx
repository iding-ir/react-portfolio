import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { getCssVariable } from "../../utils/get-css-variable";
import styles from "./PageTransition.module.scss";

export const PageTransition = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState(false);
  const classNames = clsx(styles.container, {
    [styles.active]: active,
  });

  useEffect(() => {
    setActive(true);

    const timeout = setTimeout(
      () => setActive(false),
      Number(getCssVariable("--page-transition-duration").replace("ms", "")),
    );

    return () => clearTimeout(timeout);
  }, [pathname]);

  return <div className={classNames} />;
};
