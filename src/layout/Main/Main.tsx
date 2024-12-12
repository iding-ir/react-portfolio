import { ReactNode } from "react";

import { Transition } from "../../components/Transition";
import { Wave } from "../../components/Wave";
import styles from "./Main.module.scss";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className={styles.container}>
      {children}

      <Transition />

      <Wave />
    </main>
  );
};
