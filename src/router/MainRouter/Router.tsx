import { createBrowserRouter } from "react-router-dom";
import AccountDeletion from "../../screens/AccountDeletion/AccountDeletion";
import User from "../../screens/User/User";

const routes = [
  {
    path: "/",
    element: <AccountDeletion />,
  },
  {
    path: "/user",
    element: <User />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.DEV ? "/" : "/AccountDeletionRequest/",
});
