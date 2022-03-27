import { SiteEntity } from '@camping/api-interfaces';
import { createAction, props } from '@ngrx/store';

export const sitesDocument = createAction(
  '[sites document] sites collection',
  props<{ payload: SiteEntity[] }>()
);
