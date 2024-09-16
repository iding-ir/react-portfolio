import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../app/hooks";
import { LanguagePicker } from "../../language/LanguagePicker";
import { SizePicker } from "../../size/SizePicker";
import { ThemePicker } from "../../theme/ThemePicker";
import { closeModal, selectModal } from "../modal-slice";
import styles from "./Modal.module.scss";

export const Modal = () => {
  const dispatch = useAppDispatch();
  const modal = useSelector(selectModal);

  const handleClick = () => {
    dispatch(closeModal());
  };

  return (
    modal && (
      <div className={styles.container}>
        <LanguagePicker />

        <ThemePicker />

        <SizePicker />

        <div onClick={handleClick}>Close</div>
      </div>
    )
  );
};
