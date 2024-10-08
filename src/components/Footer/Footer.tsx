import { useRoutes } from "../../hooks/use-routes";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { footer, isLoading } = useRoutes();

  if (isLoading) {
    return null;
  }

  return <footer className={styles.container}>{footer}</footer>;
};
