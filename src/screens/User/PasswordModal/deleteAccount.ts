import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth"; // Adjust the imports as needed
import _ from "lodash";
import { IUser } from "../../../types/user";
import { deleteParty } from "./deleteParty";
import { leaveEvent } from "./leaveEvent";
// Import the required functions from Firestore
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { auth } from "../../../firebase";

// Function to delete the user account from Firestore
export async function deleteUserAccount(uid: string, onDelete: () => void) {
  // Get a reference to the Firestore database
  const db = getFirestore();
  // Specify the path to the user document using the UID
  const userDocRef = doc(db, "USERS", `${uid}`);

  // Delete the user document
  await deleteDoc(userDocRef).then(() => {
    onDelete();
  });
}

export const deleteAccount = async (
  pass: string,
  userInfo: IUser,
  setReauthError: any,
  navigate: any
) => {
  const currentUser = auth.currentUser;
  if (!_.isEmpty(currentUser) && !_.isEmpty(userInfo)) {
    const credential = EmailAuthProvider.credential(currentUser.email, pass);
    try {
      await reauthenticateWithCredential(currentUser, credential);

      if (userInfo.events?.onEvent === userInfo.uid && userInfo.uid) {
        // ... deleteParty code ...
        await deleteParty(
          userInfo.events?.onEvent,
          userInfo.events?.partyLocation,
          userInfo.events?.eventType
        );
      } else if (!_.isEmpty(userInfo.events)) {
        const data = {
          partyLocation: userInfo.events?.partyLocation,
          party_access: userInfo.events?.eventType,
          partyID: userInfo.events?.onEvent,
        };
        // ... leaveEvent code ...
        await leaveEvent(data);
      }
      await deleteUserAccount(userInfo?.uid, async () => {
        alert("Your account was successfully deleted."),
          await currentUser?.delete();
      }).then(() => {
        alert("Your account was successfully deleted."),
          navigate("/", { replace: true });
      });
    } catch (e) {
      console.error(e);

      if (e.code === "auth/wrong-password") {
        setReauthError("Wrong password"); // Ensure `setReauthError` is defined
      } else {
        console.error(e);
        setReauthError("Something went wrong..."); // Ensure `setReauthError` is defined
      }
    }
  }
};
