import styles from "./Heading.module.scss";

export const Heading = ({ text }: { text: string }) => {
  return (
    // Use 'text' as the key because it is unique and changing it will
    // cause the component to re-render and re-start the CSS animation
    <h1 key={text} className={styles.container}>
      {text}
    </h1>
  );
};
