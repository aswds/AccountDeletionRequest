import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Make sure to import the appropriate icons
import { HiOutlineMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { colors } from "../../colors/colors.js";
import Input from "../../components/Input/Input.js";
import Logo from "../../components/Logo.js";
import Text from "../../components/Text.js";
import { useAction } from "../../hooks/useAction.js";
import { styles } from "./styles.js";
import { user_signIn } from "./userSignIn.js";
const AccountDeletion: React.FC = ({}) => {
  const [email, setEmail] = useState({ isValid: true, errorMsg: "" });
  const [password, setPassword] = useState({ isValid: true, errorMsg: "" });
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const [userPassword, setUserPassword] = useState<string>("");
  const [userLogin, setUserLogin] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [_showModal, setShowModal] = useState<boolean>(false);
  const { fetch_user } = useAction();
  const navigate = useNavigate();
  interface Styles {
    [key: string]: React.CSSProperties;
  }
  const styles: Styles = {
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    },
    contentContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-around",
    },
    logoContainer: {
      marginTop: 20,
      // Add your logoContainer styles here
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      width: 400,
      height: 200,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-evenly",
      marginBlock: "5%",
    },
    input: {
      width: "100%",
      borderRadius: 20,
    },
    passwordInput: {
      width: "30%",
      borderRadius: 20,
      borderWidth: 2,
      borderColor: "red",
    },
    errorMsgText: {
      textAlign: "left",
      fontWeight: 400,
      color: colors.accentColor,
    },
    button: {
      width: 400,
      borderRadius: 20,
      height: 50,
    },
    textStyle: {
      textAlign: "center",
      fontSize: "2.5em",
      color: colors.text,
    },
  };
  const iconSize = 25;

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

  return (
    <div className="loginContainer" style={styles.loginContainer}>
      <div style={styles.contentContainer}>
        <div className="logoContainer" style={styles.logoContainer}>
          <Logo />
        </div>
      </div>

      <div style={styles.inputContainer}>
        <Input
          onChange={(e) => {
            setUserLogin(e.target.value);
            setEmail({ errorMsg: "", isValid: true });
          }}
          style={styles.input}
          isValid={email.isValid}
          placeholder="Email"
          defaultValue={userLogin}
          icon={<HiOutlineMail size={iconSize} color={colors.iconColor} />}
        />
        <Input
          type={!showPassword ? "text" : "password"}
          onChange={(e) => {
            setUserPassword(e.target.value);
            setPassword({ errorMsg: "", isValid: true });
          }}
          style={styles.passwordInput}
          isValid={password.isValid}
          placeholder="Password"
          icon={PasswordIcon}
        />
        <Text size={15} style={styles.errorMsgText}>
          {errorMsg}
        </Text>
      </div>

      <button
        onClick={async () => {
          await user_signIn(
            setEmail,
            setPassword,
            setErrorMsg,
            setShowModal,
            userLogin,
            userPassword,
            navigate
          );
        }}
        style={styles.button}
      >
        Continue
      </button>
    </div>
  );
};

export default AccountDeletion;
