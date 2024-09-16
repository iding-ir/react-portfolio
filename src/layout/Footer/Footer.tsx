import { ReactNode } from "react";

import styles from "./Footer.module.scss";

export const Footer = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};
