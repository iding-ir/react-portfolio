import clsx from "clsx";
import { useEffect, useState } from "react";

import { usePage } from "../../hooks/use-page";
import { getCssVariable } from "../../utils/get-css-variable";
import styles from "./PageTransition.module.scss";

export const PageTransition = () => {
  const [active, setActive] = useState(false);
  const {
    page: { slug },
  } = usePage();

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
  }, [slug]);

  return <div className={classNames} />;
};
