import clsx from "clsx";

import Image from "../../assets/icon-select.svg";
import styles from "./Select.module.scss";

export type Option = {
  value: string;
  label: string;
};

export const Select = ({
  items,
  value,
  icon,
  onChange,
}: {
  items: Option[];
  value: string;
  icon?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={styles.container}>
      {icon && <div className={clsx(styles.icon, styles.left)}>{icon}</div>}

      <select
        className={styles.select}
        onChange={onChange}
        defaultValue={value}
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <div className={clsx(styles.icon, styles.right)}>
        <Image />
      </div>
    </div>
  );
};
