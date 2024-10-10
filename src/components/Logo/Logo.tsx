import { Link } from "react-router-dom";

import Image from "../../assets/icon-logo.svg";
import { HOME_PATH } from "../../constants";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Link to={HOME_PATH}>
        <Image />
      </Link>
    </div>
  );
};
