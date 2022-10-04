import { ActionTypes } from "./ActionTypes";

interface setTranslate {
  type: ActionTypes.SET_TRANSLATE;
  payload: any;
}
interface setCurrentMessage {
  type: ActionTypes.SET_CURRENT_MESSAGE;
  payload: any;
}
interface setNewMessage {
  type: ActionTypes.SET_NEW_MESSAGE;
  payload: any;
}
interface setUserProfile {
  type: ActionTypes.SET_USER_PROFILE;
  payload: any;
}
interface setOrder {
  type:
    | ActionTypes.SET_ORDER
    | ActionTypes.SET_SUB_CATEGORY
    | ActionTypes.DOC_CONTER;
  payload: {
    price?: number;
    name: string;
    data: any;
  };
}

interface getVerifyCode {
  type: ActionTypes.GET_VERIFY_CODE;
  payload: {
    number: string;
  };
}
interface verifyCode {
  type: ActionTypes.VERIFY_CODE | ActionTypes.WRONG_CODE;
  payload: {
    code?: string;
    id?: string;
    message?: string;
  } | null;
}

interface getConfig {
  type: ActionTypes.GET_CONFIG;
  payload: any;
}

export type Action =
  | setTranslate
  | setNewMessage
  | setCurrentMessage
  | setOrder
  | setUserProfile
  | getVerifyCode
  | verifyCode
  | getConfig;
