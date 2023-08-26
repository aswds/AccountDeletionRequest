import { auth } from "./../../../firebase";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayRemove,
  deleteField,
} from "firebase/firestore";

export async function leaveEvent(data: any) {
  const current_user_uid = auth.currentUser?.uid;
  const db = getFirestore();
  // references
  const userDoc_ref = doc(db, `USERS`, `${current_user_uid}`);
  //!! The leaveEvent is used when deleting an account, passing only crucial data from delete account screen  {partyLocation: ..., party_access: ..., partyID: ...} without fetching the entire party.
  const eventDoc_ref = doc(
    db,
    `EVENTS`,
    `${data.location?.fullAddressInfo?.partyLocation ?? data?.partyLocation}`,
    `${data.party_access}`,
    `${data.partyID}`
  );
  //remove cache
  //functions
  await updateDoc(eventDoc_ref, {
    guests: arrayRemove(current_user_uid),
    invited: arrayRemove(current_user_uid),
  });
  await updateDoc(userDoc_ref, {
    "events.onEvent": deleteField(),
    "events.eventType": deleteField(),
    "events.partyLocation": deleteField(),
  });
}
