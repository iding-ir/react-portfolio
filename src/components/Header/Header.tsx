import styles from "./Header.module.scss";

export const Header = ({ title }: { title: string }) => {
  return <div className={styles.container}>{title}</div>;
};
