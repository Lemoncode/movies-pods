import { Action } from "redux";

export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
};

export const actionsEnums = {
  MOVIES_REQUEST: '[0] MOVIES_REQUEST_COMPLETED',
  FILTER_FULL_UPDATE: '[1] FILTER_FULL_UPDATE'
}

