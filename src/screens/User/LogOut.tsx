import React, { FC } from "react";
import Modal from "../../layout/Modal";
import { colors } from "../../colors/colors";

interface LogOutProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  onLogOut?: () => void;
}

const LogOutModal: FC<LogOutProps> = ({
  children,
  isOpen,
  onClose,
  onLogOut,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal style={{ width: "50%" }}>
      <h2 style={{ marginBottom: "10%" }}>Are you sure? 🤔</h2>
      <button onClick={onLogOut} className="delete-button">
        Log out
      </button>
      <button onClick={onClose} className="cancel-button">
        Cancel
      </button>
    </Modal>
  );
};

export default LogOutModal;
