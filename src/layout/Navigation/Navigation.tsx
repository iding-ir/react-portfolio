import { ReactNode } from "react";

import styles from "./Navigation.module.scss";

export const Navigation = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
