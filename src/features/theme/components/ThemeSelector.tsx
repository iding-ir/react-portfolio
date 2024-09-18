import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import { THEMES, Theme } from "../theme";
import { selectTheme, setTheme } from "../theme-slice";
import { Select } from "../../../components/Select";

export const ThemeSelector = () => {
  const dispatch = useAppDispatch();
  const theme = useSelector(selectTheme);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTheme(event.target.value as Theme));
  };

  return (
    <Select
      items={Object.values(THEMES)}
      value={theme}
      onChange={handleChange}
    />
  );
};
