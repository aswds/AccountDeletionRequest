import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import AccountDeletion from "./screens/AccountDeletion/AccountDeletion";
import PageNotFound from "./screens/404/PageNotFound";
import User from "./screens/User/User";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AccountDeletion />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
