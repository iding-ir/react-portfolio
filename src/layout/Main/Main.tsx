import { ReactNode } from "react";

import styles from "./Main.module.scss";

export const Main = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
