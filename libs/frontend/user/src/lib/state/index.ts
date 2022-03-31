import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
export const featureName = 'featureUser';

import * as fromUserData from './reducers/user.reducer';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UserState {
  userData: fromUserData.UserDataState;
}

export const reducers: ActionReducerMap<UserState> = {
  userData: fromUserData.reducer,
};

const selectFeature = createFeatureSelector<UserState>(featureName);

const selectUserData = createSelector(selectFeature, (f) => f.userData);

export const selectUserLoggedIn = createSelector(
  selectUserData,
  (u) => u.isLoggedIn
);

export const selectUserPreferredUserName = createSelector(
  selectUserData,
  (u) => u.preferredUserName
);

export const selectUserEmail = createSelector(
  selectUserData,
  (u) => u.emailAddress
);
