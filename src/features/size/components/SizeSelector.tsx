import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import { SIZES, Size } from "../size";
import { selectSize, setSize } from "../size-slice";
import { Select } from "../../../components/Select";
import { useTranslation } from "react-i18next";

export const SizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const size = useSelector(selectSize);

  const items = Object.values(SIZES).map((size) => ({
    value: size,
    label: t(`selects.size.${size}`),
  }));

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSize(event.target.value as Size));
  };

  return <Select items={items} value={size} onChange={handleChange} />;
};
