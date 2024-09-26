import clsx from "clsx";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../../app/hooks";
import CloseIcon from "../../../assets/icon-close.svg";
import { Bubble } from "../../../components/Bubble";
import { Icon } from "../../../components/Icon";
import { LanguageSelector } from "../../language";
import { SizeSelector } from "../../size";
import { ThemeSelector } from "../../theme";
import { closeModal, selectModal } from "../modal-slice";
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
        <Icon onClick={handleClick} color="reverse">
          <CloseIcon />
        </Icon>
      </div>

      <Bubble />
    </div>
  );
};
