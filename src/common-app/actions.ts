import { Action } from "redux";

export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
};

export const actionsEnums = {
  MOVIES_REQUEST_STARTED: 'MOVIES_REQUEST',
  MOVIES_REQUEST_COMPLETED: 'MOVIES_REQUEST_COMPLETED',
  FILTER_FULL_UPDATE: 'FILTER_FULL_UPDATE',
}