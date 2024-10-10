import { useData } from "../../hooks/use-data";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { footer } = useData();

  return <footer className={styles.container}>{footer}</footer>;
};
