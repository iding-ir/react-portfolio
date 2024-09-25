import { PageTransition } from "../PageTransition";
import { Wave } from "../Wave";
import styles from "./Main.module.scss";

export const Main = ({ content }: { content: string }) => {
  return (
    <main className={styles.container}>
      {content}

      <PageTransition />

      <Wave />
    </main>
  );
};
