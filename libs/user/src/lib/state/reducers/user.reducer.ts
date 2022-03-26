import { createReducer, on } from '@ngrx/store';
import * as events from '../actions/user.events';
import * as commands from '../actions/user.commands';
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
  on(commands.loginUser, (s, a): UserDataState => a.payload),
  on(events.loginRequested, events.logoutRequested, () => initialState)
);
