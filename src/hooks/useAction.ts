import { bindActionCreators } from "@reduxjs/toolkit";
import { fetch_user } from "../redux/actions/userActions";
import { useAppDispatch } from "./useAppDispatch";
import { clear_user } from "../redux/reducers/userReducer";

export const useAction = () => {
  const dispatch = useAppDispatch();

  return bindActionCreators(
    {
      fetch_user,
      clear_user,
    },
    dispatch
  );
};
