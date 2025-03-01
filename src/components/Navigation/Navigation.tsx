import { Logo } from "../Logo";
import { Menu } from "../Menu";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <Menu />

      <Logo />
    </nav>
  );
};
