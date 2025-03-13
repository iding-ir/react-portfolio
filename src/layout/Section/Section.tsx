import { ReactNode } from "react";

import { Transition } from "../../components/Transition";
import { Wave } from "../../components/Wave";
import styles from "./Section.module.scss";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className={styles.container}>
      {children}

      <Transition />

      <Wave />
    </section>
  );
};
