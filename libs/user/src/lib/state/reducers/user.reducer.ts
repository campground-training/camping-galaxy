import { createReducer, on } from '@ngrx/store';
import * as events from '../actions/user.events';
export interface UserDataState {
  isLoggedIn: boolean;
  preferredUserName: string | null;
  emailAddress: string | null;
}

const initialState: UserDataState = {
  isLoggedIn: false,
  preferredUserName: null,
  emailAddress: null,
};

export const reducer = createReducer(
  initialState,
  on(events.loginRequested, events.logoutRequested, () => initialState)
);
