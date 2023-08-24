import { Timestamp } from "firebase/firestore";
export type Party_Access_Types = "Public" | "Via Invite";

export interface IUser {
  username?: string;
  bio?: string;
  email?: string;
  followers?: string[];
  following?: string[];
  name?: string;
  surname?: string;
  image?: string;
  events: IUserEvents;
  uid?: string;
  isPremium?: boolean;
  verifiedEmail?: boolean;
  createdAt?: Timestamp;
}
export interface IUserEvents {
  onEvent?: string;
  eventType: Party_Access_Types;
  eventsCreated: number;
  eventsVisited: number;
  partyLocation: string;
}
