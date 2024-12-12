import { ReactNode } from "react";

import styles from "./Content.module.scss";

export const Content = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
