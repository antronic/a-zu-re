
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

export const SET_CONTEXT = APP('SET_CONTEXT');

export const setContext = Creator(SET_CONTEXT);


const initial = {
  money: 10000,
  age: 20,
}

export default createReducer(initial, state => ({
  [SET_CONTEXT]: context => ({
    ...state,
    context,
  }),
}))
