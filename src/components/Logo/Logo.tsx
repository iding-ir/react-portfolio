import { Link } from "react-router-dom";
import { URLS } from "../../routes/urls";
import styles from "./Logo.module.scss";
import Image from "../../assets/icon-logo.svg";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Link to={URLS.HOME}>
        <Image />
      </Link>
    </div>
  );
};
