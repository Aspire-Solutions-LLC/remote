import { createSelector } from "reselect";

export const selectUserReducer = state => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  state => state.user
);

export const selectErrorMessage = createSelector(
  [selectUserReducer],
  state => state.errorMessage
);
