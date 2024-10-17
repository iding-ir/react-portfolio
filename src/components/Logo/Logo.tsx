import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { HOME_PATH } from "../../constants";
import { useData } from "../../hooks/use-data";
import styles from "./Logo.module.scss";

export const Logo = () => {
  const { t } = useTranslation();
  const { logo } = useData();

  return (
    <div className={styles.container}>
      <Link to={HOME_PATH}>
        <img src={logo} alt={t("logo")} />
      </Link>
    </div>
  );
};
