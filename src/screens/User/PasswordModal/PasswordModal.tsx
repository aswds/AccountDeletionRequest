import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { colors } from "../../../colors/colors";
import InputWithIcon from "../../../components/Input/Input";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import "./PasswordModal.css";
import { deleteAccount } from "./deleteAccount";
import Text from "../../../components/Text";
import { useNavigate } from "react-router-dom";
interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ isOpen, onClose }) => {
  const { current_user } = useTypedSelector((state) => state.user_state);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [reauthError, setReauthError] = useState();
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const iconSize = 30;
  const handleModalClose = () => {
    setPassword("");
    onClose();
  };
  if (!isOpen) {
    return null;
  }
  const PasswordIcon = (
    <>
      {showPassword ? (
        <FiEyeOff
          size={iconSize}
          color={colors.iconColor}
          onClick={() => setShowPassword(!showPassword)}
        />
      ) : (
        <FiEye
          size={iconSize}
          color={colors.iconColor}
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </>
  );
  const handleSubmit = async () => {
    await deleteAccount(password, current_user, setReauthError, navigate);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div
          style={{
            alignItems: "center",
          }}
        >
          <h2 style={{ flex: 1, justifyContent: "flex-start" }}>
            Enter Password
          </h2>
        </div>
        <InputWithIcon
          type={!showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          icon={PasswordIcon}
        />
        <Text
          size={15}
          style={{
            textAlign: "left",
            width: "100%",
            fontWeight: 400,
            color: colors.accentColor,
          }}
        >
          {reauthError}
        </Text>
        <div style={{ marginTop: 30, flexDirection: "column", width: "100%" }}>
          <button
            type="submit"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button onClick={handleModalClose} className="cancel-button">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordModal;
