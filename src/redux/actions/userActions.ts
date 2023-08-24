import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../Types/User";
import { auth } from "../../firebase";

export const fetch_user = createAsyncThunk(
  "user/fetch_user",
  async (): Promise<IUser> => {
    const db = getFirestore();
    return new Promise((resolve, reject) => {
      const docRef = doc(db, `USERS/${auth.currentUser?.uid}`);
      onSnapshot(docRef, async (docSnap) => {
        if (docSnap.exists()) {
          const docSnapData = docSnap.data() as IUser;
          const data = {
            ...docSnapData,
            createdAt: docSnapData?.createdAt.toDate().toISOString(),
          };
          resolve(data);
        } else {
          // await auth.signOut();
          reject(new Error());
        }
      });
    });
  }
);
