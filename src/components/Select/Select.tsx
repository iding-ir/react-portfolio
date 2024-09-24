import styles from "./Select.module.scss";

export type Option = {
  value: string;
  label: string;
};

export const Select = ({
  items,
  value,
  onChange,
}: {
  items: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <select className={styles.select} onChange={onChange} defaultValue={value}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
