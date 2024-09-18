import { ReactNode } from "react";
import styles from "./Icon.module.scss";

export const Icon = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
};
