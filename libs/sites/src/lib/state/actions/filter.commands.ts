import { createAction, props } from '@ngrx/store';

export const filterShowAll = createAction('[sites filter command] show all');

export const filterShowPrimitive = createAction(
  '[sites filter command] show primitive'
);

export const filterShowElectricity = createAction(
  '[sites filter command] show electricity',
  props<{ payload: boolean | null }>()
);

export const filterShowWater = createAction(
  '[sites filter command] show water',
  props<{ payload: boolean | null }>()
);

export const filterShowLakefront = createAction(
  '[sites filter command] show lakefront',
  props<{ payload: boolean | null }>()
);

export const filterShowRvParking = createAction(
  '[sites filter command] show rv parking',
  props<{ payload: boolean | null }>()
);
