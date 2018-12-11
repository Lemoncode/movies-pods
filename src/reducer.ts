import { combineReducers } from 'redux';
import { coreRootReducer } from './core';

// Root reducer.
export const rootReducer = combineReducers({
  core: coreRootReducer,
});
