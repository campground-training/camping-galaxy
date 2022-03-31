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
    const matches: SiteEntity[] = [];

    sites.forEach((s) => {
      if (matchesCriteria(s, filter)) {
        matches.push(s);
      }
    });

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
    hasElectrical:
      site.hasElectrical === filter.hasElectricity ||
      filter.hasElectricity === null,
    hasLakefront:
      site.hasLakefront === filter.hasLakefront || filter.hasLakefront === null,
    hasRvParking:
      site.hasRvParking === filter.hasRvParking || filter.hasRvParking === null,
    hasWater: site.hasWater === filter.hasWater || filter.hasWater === null,
  };

  return (
    matches.hasElectrical &&
    matches.hasLakefront &&
    matches.hasRvParking &&
    matches.hasWater
  );
}
