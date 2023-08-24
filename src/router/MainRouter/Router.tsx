import { createBrowserRouter } from "react-router-dom";
import AccountDeletion from "../../screens/AccountDeletion/AccountDeletion";
import User from "../../screens/User/User";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AccountDeletion />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);
