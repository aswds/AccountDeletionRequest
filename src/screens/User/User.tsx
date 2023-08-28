import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import UserNotFound from "./UserNotFound";
import UserScreen from "./UserScreen";
import { LineWave as Loader } from "react-loader-spinner";
import { colors } from "../../colors/colors";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import _ from "lodash";
import { useAction } from "../../hooks/useAction";
import { auth } from "../../firebase";
import SomethingWentWrong from "./SomethingWentWrong";
import { useNavigate } from "react-router-dom";
export default function User() {
  const { fetch_user } = useAction();
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  };
  useEffect(() => {
    fetch_user();
  }, [isSignedIn]);
  const { current_user, isLoading, error } = useTypedSelector(
    (state) => state.user_state
  );
  if (
    _.isEmpty(current_user) &&
    !isSignedIn &&
    !isLoading &&
    error === "user-not-found"
  ) {
    return <UserNotFound />;
  }
  if (error && error !== "user-not-found") {
    return <SomethingWentWrong />;
  }

  onAuthStateChanged(auth, function (user) {
    if (user != null) {
      setIsSignedIn(true);
    } else {
      navigate("/");
    }
  });
  return (
    <div className="user-page">
      {!_.isEmpty(current_user) && isSignedIn && !isLoading ? (
        <UserScreen user={current_user} />
      ) : (
        <div style={styles.container}>
          <Loader color={colors.accentColor} />
          <h2>Loading user data...</h2>
        </div>
      )}
    </div>
  );
}
