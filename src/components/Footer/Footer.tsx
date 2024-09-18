import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return <div className={styles.container}>{t("footer")}</div>;
};
