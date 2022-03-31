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
    hasWater: null,
    hasElectricity: null,
    hasLakefront: null,
    hasRvParking: null,
  })),
  on(commands.filterShowElectricity, (s, a) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasElectricity: a.payload,
    };
    return resetShowAll(state);
  }),
  on(commands.filterShowLakefront, (s, a) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasLakefront: a.payload,
    };
    return resetShowAll(state);
  }),
  on(commands.filterShowWater, (s, a) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasWater: a.payload,
    };
    return resetShowAll(state);
  }),
  on(commands.filterShowRvParking, (s, a) => {
    const state = {
      ...s,
      showAll: false,
      primitiveOnly: false,
      hasRvParking: a.payload,
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
