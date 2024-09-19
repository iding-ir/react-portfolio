import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return <footer className={styles.container}>{t("footer")}</footer>;
};
