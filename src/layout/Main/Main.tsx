import { ReactNode } from "react";

import styles from "./Main.module.scss";

export const Main = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};
