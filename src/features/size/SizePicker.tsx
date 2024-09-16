import { useSelector } from "react-redux";

import { useAppDispatch } from "../../app/hooks";
import { SIZES, Size } from "./size";
import { selectSize, setSize } from "./size-slice";
import styles from "./SizePicker.module.scss";

export const SizePicker = () => {
  const dispatch = useAppDispatch();
  const size = useSelector(selectSize);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSize(event.target.value as Size));
  };

  return (
    <div className={styles.container}>
      <select onChange={handleChange} defaultValue={size}>
        {Object.values(SIZES).map((size) => {
          return (
            <option key={size} value={size}>
              {size}
            </option>
          );
        })}
      </select>
    </div>
  );
};
