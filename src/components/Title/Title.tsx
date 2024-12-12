import styles from "./Title.module.scss";

export const Title = ({ text }: { text: string }) => {
  return (
    // Use 'text' as the key because it is unique and changing it will
    // cause the component to re-render and re-start the CSS animation
    <div key={text} className={styles.container}>
      {text}
    </div>
  );
};
