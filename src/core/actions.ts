import { BaseAction } from '../common-app';
import { coreActionIds } from './const';
import { CoreModel } from './store';


// Target: STORE
export const updateSessionInfo = (nickname: string, room: string): BaseAction<CoreModel.SessionInfo> => ({
  type: coreActionIds.UPDATE_SESSION_INFO,
  payload: { nickname, room }
});


export const filterGRidRequestAction = (filter:any /* filter*/): BaseAction<CoreModel.SessionInfo> => ({
	type: coreActionIds.FILTER_GRID_REQUEST_START,
	payload: filter
  });
  