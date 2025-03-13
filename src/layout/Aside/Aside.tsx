import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Aside.module.scss";

export const Aside = ({ children }: { children: ReactNode }) => {
  const { t } = useTranslation();

  return (
    <aside className={styles.container} aria-label={t("aside.ariaLabel")}>
      {children}
    </aside>
  );
};
