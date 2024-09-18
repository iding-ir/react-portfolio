import { ReactNode } from "react";

import styles from "./Section.module.scss";
import { Modal } from "../../features/modal";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className={styles.container}>
      {children}

      <Modal />
    </section>
  );
};
