
import {
  createAction,
  createReducer,
  Creator,
} from './helper';

// import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../core'


const APP = createAction('APP');

export const SET_PLAYER = APP('SET_PLAYER');
export const SET_MENU = APP('SET_MENU');

export const setPlayer = Creator(SET_PLAYER);
export const setMenu = Creator(SET_MENU);


const initial = {
  player: {},
  menu: {},
}

export default createReducer(initial, state => ({
  [SET_PLAYER]: player => ({
    ...state,
    player,
  }),
  [SET_MENU]: menu => ({
    ...state,
    menu,
  })
}))
