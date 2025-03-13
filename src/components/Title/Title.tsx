import styles from "./Title.module.scss";

export const Title = ({ text }: { text: string }) => {
  return (
    <h2 key={text} className={styles.container}>
      {text}
    </h2>
  );
};
