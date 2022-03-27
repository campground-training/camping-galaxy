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

    // const hasWaterSites = sites.filter((s) => s.hasWater === filter.hasWater);
    // const hasElectricalSites = sites.filter(
    //   (s) => s.hasElectrical === filter.hasElectricity
    // );
    // const hasLakefrontSites = sites.filter(
    //   (s) => s.hasLakefront === filter.hasLakefront
    // );
    // const hasRvParkingSites = sites.filter(
    //   (s) => s.hasRvParking === filter.hasRvParking
    // );

    // const union = [
    //   ...hasWaterSites,
    //   ...hasElectricalSites,
    //   ...hasLakefrontSites,
    //   ...hasRvParkingSites,
    // ];

    // const result: SiteEntity[] = [];
    // union.forEach((s) => {
    //   if (!result.some((c) => c.id === s.id)) {
    //     result.push(s);
    //   }
    // });

    // if they want lakefront and rvparking,
    // maybe get all the sites and just filter out the ones they DON'T Want.
    // so from all the sites, just make sure you return the ones at a minimum that have lakefront and rvparking
    const matches: SiteEntity[] = [];

    sites.forEach((s) => {
      if (matchesCriteria(s, filter)) {
        matches.push(s);
      }
    });

    // results have to the
    return matches;
  }
);

export const selectFilter = selectFilterBranch;

export const selectNumberOfFilteredSites = createSelector(
  selectSiteList,
  (s) => s.length
);

function matchesCriteria(site: SiteEntity, filter: fromFilter.FilterState) {
  interface MatchCriteria {
    hasElectrical: boolean | null;
    hasLakefront: boolean | null;
    hasRvParking: boolean | null;
    hasWater: boolean | null;
  }
  const matches: MatchCriteria = {
    hasElectrical: null,
    hasLakefront: null,
    hasRvParking: null,
    hasWater: null,
  };
  if (filter.hasElectricity === true) {
    matches.hasElectrical = site.hasElectrical;
  }
  if (filter.hasLakefront === true) {
    matches.hasLakefront = site.hasLakefront;
  }
  if (filter.hasRvParking === true) {
    matches.hasRvParking = site.hasRvParking;
  }
  if (filter.hasWater === true) {
    matches.hasWater = site.hasWater;
  }
  return (
    matches.hasElectrical === filter.hasElectricity &&
    matches.hasLakefront === filter.hasLakefront &&
    matches.hasRvParking === filter.hasRvParking &&
    matches.hasWater === filter.hasWater
  );
}
