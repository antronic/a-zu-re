
import {
  createAction,
  createReducer,
  Creator,
  remove,
  change,
  sum,
  flatten
} from './helper';

// import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../core'


const APP = createAction('APP');

export const SET_PLAYER = APP('SET_PLAYER');

export const setPlayer = Creator(SET_PLAYER);


const initial = {
  player: {},
}

export default createReducer(initial, state => ({
  [SET_PLAYER]: player => ({
    ...state,
    player,
  }),
}))
