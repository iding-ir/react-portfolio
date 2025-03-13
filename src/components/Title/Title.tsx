import styles from "./Title.module.scss";

export const Title = ({ text, id }: { text: string; id: string }) => {
  return (
    <h2 id={id} key={text} className={styles.container}>
      {text}
    </h2>
  );
};
