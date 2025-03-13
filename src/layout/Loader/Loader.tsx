import { Player } from "@lottiefiles/react-lottie-player";
import { useTranslation } from "react-i18next";

import styles from "./Loader.module.scss";

export const Loader = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container} aria-live="polite">
      <span className={styles.hidden}>{t("loader.description")}</span>

      <Player
        autoplay
        loop
        src="/assets/lottie/loader.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};
