import styles from "./Header.module.scss";

export const Header = ({ title }: { title: string }) => {
  return <header className={styles.container}>{title}</header>;
};
