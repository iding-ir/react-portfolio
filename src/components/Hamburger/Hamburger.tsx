import { useAppDispatch } from "../../app/hooks";
import { openModal } from "../../features/modal";
import { Icon } from "../Icon";
import HamburgerIcon from "./icon-hamburger.svg";

export const Hamburger = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <Icon onClick={handleClick}>
      <HamburgerIcon />
    </Icon>
  );
};
