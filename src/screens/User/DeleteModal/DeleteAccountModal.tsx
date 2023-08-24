import React from "react";
import "./DeleteAccountModal.css";
import { MdOutlineNoAccounts } from "react-icons/md";
import { colors } from "../../../colors/colors";
import PasswordModal from "../PasswordModal/PasswordModal";
interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteAccountModal: React.FC<DeleteAccountModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  const handleDeleteClick = () => {
    onDelete();
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <MdOutlineNoAccounts size={50} color={colors.accentColor} />
        <h2>Confirm Account Deletion</h2>
        <p style={{}}>
          Are you sure you want to delete your account?
          <br />
          This action cannot be undone.
        </p>
        <p style={{}}></p>
        <button onClick={handleDeleteClick} className="delete-button">
          Delete Account
        </button>
        <button onClick={onClose} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteAccountModal;
