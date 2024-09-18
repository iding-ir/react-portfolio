import styles from "./Main.module.scss";

export const Main = ({ content }: { content: string }) => {
  return <div className={styles.container}>{content}</div>;
};
