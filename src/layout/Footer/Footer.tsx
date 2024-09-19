import { ReactNode } from "react";

import styles from "./Footer.module.scss";

export const Footer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};
