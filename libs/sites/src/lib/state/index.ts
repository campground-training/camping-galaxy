

import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
export const featureName = 'featureSites';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SitesState {}

export const reducers:ActionReducerMap<SitesState> = {}

const selectFeature = createFeatureSelector<SitesState>(featureName);
