import Image from "../../assets/icon-logo.svg";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Image />
    </div>
  );
};
