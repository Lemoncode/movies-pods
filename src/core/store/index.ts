import * as CoreModel from './model';
export { CoreModel };

import { combineReducers } from 'redux';
import { sessionInfoReducer } from './session-info.reducer';

export const coreRootReducer = combineReducers<CoreModel.State>({
  sessionInfo: sessionInfoReducer,
});

