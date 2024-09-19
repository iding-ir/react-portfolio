import { Hamburger } from "../Hamburger";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <Hamburger />

      <Menu />

      <Logo />
    </nav>
  );
};
