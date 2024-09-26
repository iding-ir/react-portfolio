import { ReactNode } from "react";

import { Modal } from "../../features/modal";
import styles from "./Section.module.scss";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      {children}

      <Modal />
    </div>
  );
};
