import { ReactNode } from "react";

import styles from "./Header.module.scss";

export const Header = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
