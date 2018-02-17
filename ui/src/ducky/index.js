import {createStore, combineReducers, applyMiddleware, compose} from 'redux'

import app from './app'

const composeEnhancers = typeof window === 'object'
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  : compose

export const reducers = combineReducers({app})
const store = createStore(reducers, composeEnhancers())

export default store
