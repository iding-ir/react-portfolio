import { useAppDispatch } from "../../app/hooks";
import MenuIcon from "../../assets/icon-menu.svg";
import { openDialog } from "../../features/dialog";
import { Icon } from "../Icon";

export const Hamburger = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openDialog());
  };

  return (
    <Icon onClick={handleClick} size="xl" color="reverse" ariaLabel="Menu">
      <MenuIcon />
    </Icon>
  );
};
