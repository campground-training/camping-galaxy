import { createReducer, on } from '@ngrx/store';
import * as commands from '../actions/filter.commands';
export interface FilterState {
  showAll: boolean;
  primitiveOnly: boolean;
  hasWater: boolean | null;
  hasElectricity: boolean | null;
  hasLakefront: boolean | null;
  hasRvParking: boolean | null;
}

const initialState: FilterState = {
  showAll: true,
  primitiveOnly: false,
  hasWater: null,
  hasElectricity: null,
  hasLakefront: null,
  hasRvParking: null,
};

export const reducer = createReducer(
  initialState,
  on(commands.filterShowAll, () => initialState),
  on(commands.filterShowPrimitive, () => ({
    showAll: false,
    primitiveOnly: true,
    hasWater: false,
    hasElectricity: false,
    hasLakefront: false,
    hasRvParking: false,
  })),
  on(commands.filterShowElectricity, (s) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasElectricity: !s.hasElectricity,
    };
    return resetShowAll(state);
  }),
  on(commands.filterShowLakefront, (s) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasLakefront: !s.hasLakefront,
    };
    return resetShowAll(state);
  }),
  on(commands.filterShowWater, (s) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasWater: !s.hasWater,
    };
    return resetShowAll(state);
  }),
  on(commands.filterShowRvParking, (s) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasRvParking: !s.hasRvParking,
    };
    return resetShowAll(state);
  })
);

function resetShowAll(s: FilterState): FilterState {
  if (
    s.hasElectricity === false &&
    s.hasLakefront === false &&
    s.hasRvParking === false &&
    s.hasWater === false
  ) {
    return initialState;
  } else {
    return s;
  }
}
