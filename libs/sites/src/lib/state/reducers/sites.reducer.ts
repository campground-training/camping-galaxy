import { SiteEntity } from '@camping/api-interfaces';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as documents from '../actions/sites.documents';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SitesState extends EntityState<SiteEntity> {}

export const adapter = createEntityAdapter<SiteEntity>();

const initialState = adapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(
    documents.sitesDocument,
    (s, a): SitesState => adapter.upsertMany(a.payload, s)
  )
);
