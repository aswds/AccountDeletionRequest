import React from "react";

export default function error_handle(props) {
  const { error, setErrorMsg, setPassword, setEmail } = props;
  switch (error) {
    case "auth/invalid-email":
      setErrorMsg(
        "The format of your email address is not correct please enter your correct email address to proceed."
      );
      setEmail({ isValid: false });
      break;
    case "auth/wrong-password":
      setErrorMsg(
        "Sorry, you entered the wrong password. Check your password again."
      );
      setPassword({
        isValid: false,
      });
      break;
    case "auth/user-not-found":
      setErrorMsg(
        "The email you entered does not belong to the account. Check your email and try again."
      );
      setEmail({ isValid: false });
      break;
    case "auth/internal-error":
      setErrorMsg("Something went wrong...");
      setPassword({
        isValid: false,
      });
      break;
    default:
      setErrorMsg("Something went wrong...");
      break;
  }
}
