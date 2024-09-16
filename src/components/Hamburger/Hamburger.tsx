import Icon from "./icon-hamburger.svg";
import styles from "./Hamburger.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { openModal } from "../../features/modal";

export const Hamburger = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(openModal());
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <Icon />
    </div>
  );
};
