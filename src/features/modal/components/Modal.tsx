import { useSelector } from "react-redux";
import clsx from "clsx";
import { useAppDispatch } from "../../../app/hooks";
import { closeModal, selectModal } from "../modal-slice";
import { LanguageSelector } from "../../language";
import { ThemeSelector } from "../../theme";
import { SizeSelector } from "../../size";
import { Icon } from "../../../components/Icon";
import CloseIcon from "../../../assets/icon-close.svg";
import styles from "./Modal.module.scss";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const open = useSelector(selectModal);

  const handleClick = () => {
    dispatch(closeModal());
  };

  const classNames = clsx(styles.container, {
    [styles.open]: open,
  });

  return (
    <div className={classNames}>
      <LanguageSelector />

      <ThemeSelector />

      <SizeSelector />

      <div className={styles.close}>
        <Icon onClick={handleClick}>
          <CloseIcon />
        </Icon>
      </div>
    </div>
  );
};
