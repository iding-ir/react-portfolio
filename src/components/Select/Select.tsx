import { ChangeEvent, ReactNode } from "react";

import Image from "../../assets/icon-select.svg";
import styles from "./Select.module.scss";

export type Option = {
  value: string;
  label: string;
};

export const Select = ({
  id,
  items,
  value,
  icon,
  label,
  onChange,
}: {
  id: string;
  items: Option[];
  value: string;
  icon: ReactNode;
  label?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className={styles.container}>
      <i className={styles.icon}>{icon}</i>

      <label htmlFor={id}>{label}</label>

      <select id={id} onChange={onChange} defaultValue={value}>
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <i className={styles.arrow}>
        <Image />
      </i>
    </div>
  );
};
