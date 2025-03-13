import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.scss";

export const Footer = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation();

  return (
    <footer
      className={styles.container}
      role="contentinfo"
      aria-label={t("footer.ariaLabel")}
    >
      {children}
    </footer>
  );
};
