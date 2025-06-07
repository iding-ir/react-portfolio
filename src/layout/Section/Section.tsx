import { ReactNode } from "react";

import { Transition } from "../../components/Transition";
import { Wave } from "../../components/Wave";
import styles from "./Section.module.scss";

export const Section = ({
  children,
  ariaDescribedBy,
}: {
  children: ReactNode;
  ariaDescribedBy: string;
}) => {
  return (
    <section className={styles.container} aria-describedby={ariaDescribedBy}>
      {children}

      <Transition />

      <Wave />
    </section>
  );
};
