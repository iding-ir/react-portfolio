import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import { SIZES, Size } from "../size";
import { selectSize, setSize } from "../size-slice";
import { Select } from "../../../components/Select";

export const SizeSelector = () => {
  const dispatch = useAppDispatch();
  const size = useSelector(selectSize);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSize(event.target.value as Size));
  };

  return (
    <Select items={Object.values(SIZES)} value={size} onChange={handleChange} />
  );
};
