import { Link } from "react-router-dom";

import Image from "../../assets/cover.svg";
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
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.caption}>{caption}</p>

      <span className={styles.image}>
        <Link to={link} className={styles.link}>
          <Icon>
            <Image />
          </Icon>
        </Link>
      </span>
    </div>
  );
};
