import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../../app/hooks";
import MenuIcon from "../../assets/icon-menu.svg";
import { openDialog } from "../../features/dialog";
import { Icon } from "../Icon";

export const Hamburger = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openDialog());
  };

  return (
    <Icon
      onClick={handleClick}
      size="xl"
      color="reverse"
      aria-label={t("hamburger.ariaLabel")}
    >
      <MenuIcon />
    </Icon>
  );
};
