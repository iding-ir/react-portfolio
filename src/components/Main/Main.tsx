import { ReactNode } from "react";

import { PageTransition } from "../PageTransition";
import { Wave } from "../Wave";
import styles from "./Main.module.scss";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.container}>
      {children}

      <PageTransition />

      <Wave />
    </main>
  );
};
