import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

import styles from "./Transition.module.scss";

export const Transition = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);
  const [key, setKey] = useState(uuid());

  useEffect(() => {
    setActive(true);
    setKey(uuid());
  }, [location]);

  const handleAnimationEnd = () => {
    setActive(false);
  };

  const classNames = clsx(styles.container, {
    [styles.active]: active,
  });

  return (
    <div className={classNames} key={key} onAnimationEnd={handleAnimationEnd}>
      <div className={styles.fader} />
      <div className={styles.slider} />
    </div>
  );
};
