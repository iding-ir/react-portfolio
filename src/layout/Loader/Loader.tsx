import { Player } from "@lottiefiles/react-lottie-player";

import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <Player
        autoplay
        loop
        src="/assets/lottie/loader.json"
        style={{ height: "300px", width: "300px" }}
      ></Player>
    </div>
  );
};
