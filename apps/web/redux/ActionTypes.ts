export enum ActionTypes {
  SET_TRANSLATE = "SET_TRANSLATE",
  SET_NEW_MESSAGE = "SET_NEW_MESSAGE",
  SET_CURRENT_MESSAGE = "SET_CURRENT_MESSAGE",
  SET_ORDER = "SET_ORDER",
  SET_USER_PROFILE = "SET_USER_PROFILE",
  SET_SUB_CATEGORY = "SET_SUB_CATEGORY",
  GET_VERIFY_CODE = "GET_VERIFY_CODE",
  VERIFY_CODE = "VERIFY_CODE",
  WRONG_CODE = "WRONG_CODE",
  DOC_CONTER = "DOC_CONTER",
  GET_CONFIG = "GET_CONFIG",
}

export type ArticleState = {
  translates: {
    word: string,
    primaryWord: string,
    wordDepends: string,
    primaryTranslate: string,
    primaryTranslateTo: string,
    status: string
  }[],
  ticketsMessage: {}[],
  currentTicket: {}[],
  userProfile: {},
  documents: { id: string, title: string }[],
  loginCode: number | string,
  wrongCode: number | string,
  config: {},
  order: {
    lang: string,
    translateTo: string,
    category: string,
    subCategory: string,
    factor: string,
    finishTime: string,
    recivingWay: string,
    uploadedDocuments: [],
    recivingType: string,
    recvingDate: string,
    price: number,
    progress: number,
    delivaryPrice : number
  },
};

export type ArticleAction = {
  type: string;
  payload: string[] | [] | {} | string | number;
};

export type DispatchType = (args: ArticleAction) => ArticleAction;
