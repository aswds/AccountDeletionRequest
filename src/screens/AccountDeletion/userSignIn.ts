import { signInWithEmailAndPassword } from "firebase/auth";
import error_handle from "./error_handle";
import { auth } from "../../firebase";
export async function user_signIn(
  setEmail,
  setPassword,
  setErrorMsg,
  setShowModal,
  email,
  password,
  navigate
) {
  await signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      navigate("/user", { replace: true });
    })
    .catch(async (error) => {
      await error_handle({
        error: error.code,
        setEmail,
        setPassword,
        setErrorMsg,
        setShowModal,
      });
    });
}
