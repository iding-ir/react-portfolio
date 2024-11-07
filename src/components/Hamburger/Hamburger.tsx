import { useAppDispatch } from "../../app/hooks";
import MenuIcon from "../../assets/icon-menu.svg";
import { openModal } from "../../features/modal";
import { Icon } from "../Icon";

export const Hamburger = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <Icon onClick={handleClick} color="reverse" ariaLabel="Menu">
      <MenuIcon />
    </Icon>
  );
};
