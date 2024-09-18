import styles from "./Select.module.scss";

export const Select = ({
  items,
  value,
  onChange,
}: {
  items: string[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <select className={styles.select} onChange={onChange} defaultValue={value}>
      {items.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};
