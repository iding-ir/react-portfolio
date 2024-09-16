import { Logo } from "../Logo";
import { Menu } from "../Menu";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <Logo />

      <Menu />
    </div>
  );
};
