import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
export const featureName = 'featureSites';

import * as fromSites from './reducers/sites.reducer';
export interface SitesState {
  sites: fromSites.SitesState;
}

export const reducers: ActionReducerMap<SitesState> = {
  sites: fromSites.reducer,
};

const selectFeature = createFeatureSelector<SitesState>(featureName);

const selectSites = createSelector(selectFeature, (f) => f.sites);

const { selectAll: selectAllSitesArray } =
  fromSites.adapter.getSelectors(selectSites);

export const selectSiteList = selectAllSitesArray;
