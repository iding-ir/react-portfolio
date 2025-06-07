import { ReactNode, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { Wave } from "../../components/Wave";
import styles from "./Section.module.scss";

export const Section = ({
  children,
  ariaDescribedBy,
}: {
  children: ReactNode;
  ariaDescribedBy: string;
}) => {
  const location = useLocation();
  const ref = useRef<string>(uuid());

  useEffect(() => {
    ref.current = uuid();
  }, [location]);

  return (
    <section className={styles.container} aria-describedby={ariaDescribedBy}>
      <div key={ref.current} className={styles.children}>
        {children}
      </div>

      <Wave />
    </section>
  );
};
