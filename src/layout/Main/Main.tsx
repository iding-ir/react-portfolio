import { ReactNode } from "react";

import styles from "./Main.module.scss";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    // Setting role="main" for main tag is for the purpose of older browsers.
    <main className={styles.container} role="main">
      {children}
    </main>
  );
};
