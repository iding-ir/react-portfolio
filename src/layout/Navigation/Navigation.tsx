import { ReactNode } from "react";

import styles from "./Navigation.module.scss";

export const Navigation = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};
