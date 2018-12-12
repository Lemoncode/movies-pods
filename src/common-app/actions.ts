import { Action } from "redux";

export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
};

export const actionsEnums = {
  MOVIES_REQUEST: '[0] MOVIES_REQUEST',
  MOVIES_REQUEST_COMPLETED: '[1] MOVIES_REQUEST_COMPLETED',
  FILTER_REQUEST: '[2] FILTER_REQUEST',
  FILTER_REQUEST_COMPLETED: '[]3 FILTER_REQUEST_COMPLETED',
}
