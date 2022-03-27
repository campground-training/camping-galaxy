import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
export const featureName = 'featureSites';

import * as fromSites from './reducers/sites.reducer';
import * as fromFilter from './reducers/filter.reducer';
import { SiteEntity } from '@camping/api-interfaces';
export interface SitesState {
  sites: fromSites.SitesState;
  filter: fromFilter.FilterState;
}

export const reducers: ActionReducerMap<SitesState> = {
  sites: fromSites.reducer,
  filter: fromFilter.reducer,
};

const selectFeature = createFeatureSelector<SitesState>(featureName);

const selectSitesBranch = createSelector(selectFeature, (f) => f.sites);
const selectFilterBranch = createSelector(selectFeature, (f) => f.filter);

const { selectAll: selectAllSitesArray } =
  fromSites.adapter.getSelectors(selectSitesBranch);

export const selectSiteList = createSelector(
  selectAllSitesArray,
  selectFilterBranch,
  (sites, filter) => {
    if (filter.showAll) {
      return sites;
    }
    if (filter.primitiveOnly) {
      return sites.filter(
        (s) => !s.hasElectrical && !s.hasRvParking && !s.hasWater
      );
    }

    let filtered: SiteEntity[] = [];
    filtered = filter.hasElectricity
      ? sites.filter((s) => s.hasElectrical)
      : filtered;
    filtered = filter.hasWater ? sites.filter((s) => s.hasWater) : filtered;
    filtered = filter.hasLakefront
      ? sites.filter((s) => s.hasLakefront)
      : filtered;
    filtered = filter.hasRvParking
      ? sites.filter((s) => s.hasRvParking)
      : filtered;
    return filtered;
  }
);

export const selectFilter = selectFilterBranch;

export const selectNumberOfFilteredSites = createSelector(
  selectSiteList,
  (s) => s.length
);
