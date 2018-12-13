import { Action } from "redux";

export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
};

export const actionsEnums = {
  MOVIES_REQUEST_START: '[0] MOVIES_REQUEST_START',
  MOVIES_REQUEST_COMPLETED: '[1] MOVIES_REQUEST_COMPLETED',
  FILTER_FULL_UPDATE: '[2] FILTER_FULL_UPDATE'
}

