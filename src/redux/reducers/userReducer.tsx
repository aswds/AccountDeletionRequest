import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";
import { fetch_user } from "../actions/userActions";

interface IState {
  isLoading: boolean;
  error: null | string;
  current_user: IUser;
}

const initialState: IState = {
  isLoading: false,
  error: null,
  current_user: {} as IUser,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clear_user: (state) => {
      state.current_user = {} as IUser;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetch_user.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetch_user.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.current_user = { ...state.current_user, ...action.payload };
        state.isLoading = false;
      }
    );
  },
});
export const { clear_user } = userSlice.actions;
export default userSlice.reducer;
