import { BaseAction } from '../../common-app';
import { coreActionIds } from '../const';
import * as CoreModel from './model';

type SessionInfoReducer = (
  state: CoreModel.SessionInfo,
  action: BaseAction
) => CoreModel.SessionInfo;

export const sessionInfoDefaultState = (): CoreModel.SessionInfo => ({
  nickname: '',
  room: '',
});

export const sessionInfoReducer: SessionInfoReducer = (state = sessionInfoDefaultState(), action) => {
  switch (action.type) {
    case coreActionIds.UPDATE_SESSION_INFO:
      return handleUpdateSessionInfo(state, action.payload as CoreModel.SessionInfo);
  }
  return state;
};

export const handleUpdateSessionInfo = (
  state: CoreModel.SessionInfo,
  sessionInfo: CoreModel.SessionInfo
): CoreModel.SessionInfo => sessionInfo;
