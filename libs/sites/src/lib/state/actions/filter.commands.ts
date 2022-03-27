import { createAction } from '@ngrx/store';

export const filterShowAll = createAction('[sites filter command] show all');

export const filterShowPrimitive = createAction(
  '[sites filter command] show primitive'
);

export const filterShowElectricity = createAction(
  '[sites filter command] show electricity'
);

export const filterShowWater = createAction(
  '[sites filter command] show water'
);

export const filterShowLakefront = createAction(
  '[sites filter command] show lakefront'
);

export const filterShowRvParking = createAction(
  '[sites filter command] show rv parking'
);
