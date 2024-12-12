import clsx from "clsx";
import { ReactNode } from "react";

import styles from "./Icon.module.scss";

export const Icon = ({
  size = "md",
  color = "normal",
  active = false,
  animated = false,
  text,
  ariaLabel,
  children,
  onClick,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "normal" | "reverse";
  active?: boolean;
  animated?: boolean;
  text?: string;
  ariaLabel?: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  const classNames = clsx(styles.container, {
    [styles.xs]: size === "xs",
    [styles.sm]: size === "sm",
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
    [styles.xl]: size === "xl",
    [styles.normal]: color === "normal",
    [styles.reverse]: color === "reverse",
    [styles.active]: active,
    [styles.animated]: animated,
  });

  return (
    <div className={classNames} onClick={onClick} aria-label={ariaLabel}>
      <span className={styles.icon}>{children}</span>

      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
};
