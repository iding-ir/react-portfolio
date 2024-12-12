import { ReactNode } from "react";

import styles from "./Copyright.module.scss";

export const Copyright = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
