import { LanguagePicker } from "../../features/language/LanguagePicker";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles.container}>
      <Logo />

      <Menu />

      <LanguagePicker />
    </div>
  );
};
