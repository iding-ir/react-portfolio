import { ReactNode } from "react";

import { Transition } from "../../components/Transition";
import { Wave } from "../../components/Wave";
import styles from "./Section.module.scss";

export const Section = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  return (
    <section className={styles.container} aria-describedby={id}>
      {children}

      <Transition />

      <Wave />
    </section>
  );
};
