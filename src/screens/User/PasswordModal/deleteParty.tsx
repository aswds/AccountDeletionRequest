import { collection, deleteDoc, doc, getFirestore } from "firebase/firestore";
import { deleteObject, getStorage, listAll, ref } from "firebase/storage";
import { deleteSubcollections } from "./deleteDocument";
export async function deleteParty(
  partyID: string,
  city: string,
  party_access: string
) {
  const db = getFirestore();
  const storage = getStorage();
  const partyRef = doc(
    db,
    "EVENTS",
    `${city}`,
    `${party_access}`,
    `${partyID}`
  );
  const partyAnnouncementsRef = collection(
    db,
    "PARTIES_POSTS",
    `${partyID}`,
    `USERS_ANNOUNCEMENTS`
  );
  const partyPostRef = collection(
    db,
    "PARTIES_POSTS",
    `${partyID}`,
    `USERS_POSTS`
  );

  const storageRef = ref(storage, `partiesMedia/${partyID}/`);
  deleteSubcollections(partyPostRef);
  deleteSubcollections(partyAnnouncementsRef);
  await deleteDoc(partyRef);
  (await listAll(storageRef)).items.forEach((item) => deleteObject(item));
}
