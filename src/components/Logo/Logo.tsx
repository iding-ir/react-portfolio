import Brand from "../../assets/logo.svg";
import styles from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={styles.container}>
      <Brand />
    </div>
  );
};
