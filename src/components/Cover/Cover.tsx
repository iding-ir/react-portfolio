import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import CoverIcon from "../../assets/icon-cover.svg";
import { Icon } from "../Icon";
import styles from "./Cover.module.scss";

export const Cover = ({
  title,
  caption,
  link,
}: {
  title: string;
  caption: string;
  link: string;
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.caption}>{caption}</p>

      <Link to={link} className={styles.link}>
        <Icon size="lg" text={t("pages.coverPage.enter")}>
          <CoverIcon />
        </Icon>
      </Link>
    </div>
  );
};
