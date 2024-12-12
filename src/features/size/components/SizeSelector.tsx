import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import Icon from "../../../assets/icon-size.svg";
import { Select } from "../../../components/Select";
import { SIZES } from "../size";
import { selectSize, setSize } from "../size-slice";
import { SizeType } from "../types";

export const SizeSelector = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const size = useSelector(selectSize);

  const items = Object.values(SIZES).map((size) => ({
    value: size,
    label: t(`selects.size.${size}`),
  }));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSize(event.target.value as SizeType));
  };

  return (
    <Select
      id="size-selector"
      items={items}
      value={size}
      icon={<Icon />}
      label={t("selects.size.label")}
      onChange={handleChange}
    />
  );
};
