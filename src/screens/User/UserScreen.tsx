import { useEffect, useState } from "react";
import noImage from "../../assets/noImage.png";
import { colors } from "../../colors/colors";
import { IUser } from "../../types/user";
import DeleteAccountModal from "./DeleteModal/DeleteAccountModal";
import "./UserScreen.css";
import PasswordModal from "./PasswordModal/PasswordModal";
import { fetch_user } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import LogOutModal from "./LogOut";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
export default function UserScreen({ user }: { user: IUser }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
  const date = new Date(user.createdAt?.toString());
  const [isPasswordModalOpen, setIsPassModalOpen] = useState<boolean>(false);
  useEffect(() => {
    fetch_user();
  }, []);
  const limitedLinesStyles = {
    height: 80,
    padding: 15,
  };

  return (
    <div className="user-container">
      <div className="user-profile">
        <img
          src={user?.image ?? noImage}
          alt={`${user.username}'s profile`}
          style={{ height: 100, borderRadius: 45 }}
        />
        <h2>
          {user.name} {user.surname}
        </h2>
        <h4 style={{}}>@{user.username}</h4>
        <div style={limitedLinesStyles}>
          <p
            className="bio"
            style={{
              color: colors.text_2,
            }}
          >
            {user.bio ?? "No bio"}
          </p>
        </div>

        <div
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <p>Followers: {user.followers?.length ?? 0}</p>
          <p>Following: {user.following?.length ?? 0}</p>
        </div>

        <p>Verified Email: {user.verifiedEmail ? "Yes" : "No"}</p>
        <p>Joined: {date.toDateString() || "No information"}</p>
        <button onClick={() => setIsOpen(true)}>Delete account</button>
        <div
          onClick={() => setIsLogoutOpen(true)}
          style={{
            marginTop: "5%",
            color: colors.accentColor,
            cursor: "pointer",
          }}
        >
          Log out
        </div>
      </div>
      <DeleteAccountModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onDelete={() => {
          setIsPassModalOpen(true);
        }}
      />
      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={() => {
          setIsPassModalOpen(false);
        }}
      />
      <LogOutModal
        isOpen={isLogoutOpen}
        onClose={() => {
          setIsLogoutOpen(false);
        }}
        onLogOut={async () => {
          await signOut(auth);
        }}
      />
    </div>
  );
}
