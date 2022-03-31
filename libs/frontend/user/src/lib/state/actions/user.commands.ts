import { createAction } from "@ngrx/store";
import { UserData } from "../models";
import { UserDataState } from "../reducers/user.reducer";

export const loginUser = createAction(
  '[user command] log in user',
  ({userData}: {userData: UserData}) => ({
    payload: {
      isLoggedIn: true,
      preferredUserName: userData?.preferred_username,
      emailAddress: userData?.email
    } as UserDataState
  })
)
