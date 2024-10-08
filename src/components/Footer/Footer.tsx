import { useRoutes } from "../../hooks/use-routes";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { footer } = useRoutes();

  if (!footer) {
    return null;
  }

  return <footer className={styles.container}>{footer}</footer>;
};
