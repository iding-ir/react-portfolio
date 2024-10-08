import { useRoutes } from "../../hooks/use-routes";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { footer } = useRoutes();

  return <footer className={styles.container}>{footer}</footer>;
};
