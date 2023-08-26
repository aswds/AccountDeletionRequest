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
    <div
      className="loginContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flexDirection: "column",
        }}
      >
        <Text>Account deletion</Text>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          We are sorry that you are leaving us
        </Text>
        <div className="logoContainer" style={styles.logoContainer}>
          <Logo />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          height: 200,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginBlock: "5%",
        }}
      >
        <Input
          onChange={(e) => {
            setUserLogin(e.target.value);
            setEmail({ errorMsg: "", isValid: true });
          }}
          style={{
            width: "100%",
            borderRadius: 20,
          }}
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
          style={{
            width: "30%",
            borderRadius: 20,
            borderWidth: !password.isValid ? 0 : 2,
            borderColor: "red",
          }}
          isValid={password.isValid}
          placeholder="Password"
          icon={PasswordIcon}
        />
        <Text
          size={15}
          style={{
            textAlign: "left",
            fontWeight: 400,
            color: colors.accentColor,
          }}
        >
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
          ).then(() => {
            fetch_user();
          });
        }}
        style={{ width: 400, borderRadius: 20, height: 50 }}
      >
        Continue
      </button>
    </div>
  );
};

export default AccountDeletion;
