import React from "react";

interface ModalProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ children, style }) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
