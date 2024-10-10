import { useData } from "../../hooks/use-data";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { footer, isLoading } = useData();

  if (isLoading) {
    return null;
  }

  return <footer className={styles.container}>{footer}</footer>;
};
