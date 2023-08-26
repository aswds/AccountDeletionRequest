import { RouteObject, createBrowserRouter } from "react-router-dom";
import AccountDeletion from "../../screens/AccountDeletion/AccountDeletion";
import User from "../../screens/User/User";
import PageNotFound from "../../screens/404/PageNotFound";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AccountDeletion />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.DEV ? "/" : "/AccountDeletionRequest",
});
