import { ReactNode } from "react";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CloseIcon from "../../assets/icon-close.svg";
import { Icon } from "../../components/Icon";
import { closeDialog, selectDialog } from "../../features/dialog";
import styles from "./Dialog.module.scss";

export const Dialog = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectDialog);

  const handleClick = () => {
    dispatch(closeDialog());
  };

  return (
    <dialog open={open} className={styles.container}>
      {children}

      <div className={styles.close}>
        <Icon onClick={handleClick} size="lg" color="reverse" ariaLabel="Close">
          <CloseIcon />
        </Icon>
      </div>
    </dialog>
  );
};
