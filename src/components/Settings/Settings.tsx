import { LanguageSelector } from "../../features/language";
import { SizeSelector } from "../../features/size";
import { ThemeSelector } from "../../features/theme";
import styles from "./Settings.module.scss";

export const Settings = () => {
  return (
    <div className={styles.container}>
      <LanguageSelector />

      <ThemeSelector />

      <SizeSelector />
    </div>
  );
};
