import { combineReducers } from 'redux';
import { coreRootReducer } from './core';
import { connectRouter } from 'connected-react-router'

// Root reducer.
export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  core: coreRootReducer,
});
