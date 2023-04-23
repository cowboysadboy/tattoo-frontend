import { createAction, props } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const setNickname = createAction(
  '[App] Set Nickname',
  props<{ nickname: string }>(),
);

export const selectNickname = createSelector(
  (state: AppState) => state.nickname,
  (nickname) => nickname,
);

export const clearNickname = createAction('[App] Clear Nickname');