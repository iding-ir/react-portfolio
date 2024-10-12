import clsx from "clsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCssVariable } from "../../utils/get-css-variable";
import styles from "./PageTransition.module.scss";

export const PageTransition = () => {
  const [active, setActive] = useState(false);
  const { slug } = useParams();

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

  return (
    <div className={classNames}>
      <div className={styles.fader} />
      <div className={styles.slider} />
    </div>
  );
};
