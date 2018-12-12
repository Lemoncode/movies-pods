import { Action } from "redux";

export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
};

export const actionsEnums = {
  MOVIES_REQUEST: 'MOVIES_REQUEST',
  MOVIES_REQUEST_COMPLETED: 'MOVIES_REQUEST_COMPLETED',
  FILTER_REQUEST: 'FILTER_REQUEST',
  FILTER_REQUEST_COMPLETED: 'FILTER_REQUEST_COMPLETED',
}