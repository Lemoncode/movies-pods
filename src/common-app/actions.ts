import { Action } from "redux";

export interface BaseAction<T = any> extends Action<string> {
  payload?: T;
};