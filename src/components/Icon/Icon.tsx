import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Icon.module.scss";

export const Icon = ({
  size = "lg",
  color = "normal",
  active = false,
  animated = false,
  onClick,
  children,
}: {
  size?: "sm" | "md" | "lg";
  color?: "normal" | "reverse";
  active?: boolean;
  animated?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) => {
  const classNames = clsx(styles.container, {
    [styles.sm]: size === "sm",
    [styles.md]: size === "md",
    [styles.lg]: size === "lg",
    [styles.normal]: color === "normal",
    [styles.reverse]: color === "reverse",
    [styles.active]: active,
    [styles.animated]: animated,
  });

  return (
    <i className={classNames} onClick={onClick}>
      {children}
    </i>
  );
};
