import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectNickname = createSelector(
  (state: AppState) => state.nickname,
  (nickname) => nickname,
);