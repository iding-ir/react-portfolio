import styles from "./Bubble.module.scss";

export const Bubble = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bubble} />
      <div className={styles.bubble} />
      <div className={styles.bubble} />
    </div>
  );
};
