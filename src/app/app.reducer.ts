import { createReducer, on } from '@ngrx/store';
import { setNickname, clearNickname } from './app.actions';
import { AppState } from './app.state';

const initialState: AppState = {
  nickname: '',
};

export const appReducer = createReducer(
  initialState,
  on(setNickname, (state, { nickname }) => ({ ...state, nickname })),
  on(clearNickname, (state) => ({ ...state, nickname: '' })),
);