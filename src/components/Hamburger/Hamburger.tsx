import { useAppDispatch } from "../../app/hooks";
import { openModal } from "../../features/modal";
import { Icon } from "../Icon";
import MenuIcon from "../../assets/icon-menu.svg";

export const Hamburger = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <Icon onClick={handleClick}>
      <MenuIcon />
    </Icon>
  );
};
