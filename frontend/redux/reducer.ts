import { ActionTypes, ArticleState } from "./ActionTypes";

import { Action } from "./Actions";
import tickets from "lib/ticket.json";

const initialState: ArticleState = {
  translates: [],
  ticketsMessage: tickets,
  currentTicket: tickets,
  userProfile: {},
  documents: [],
  loginCode: "",
  wrongCode: "",
  config: {},
  order: {
    lang: "",
    translateTo: "",
    category: "",
    subCategory: "",
    factor: "",
    finishTime: "",
    recivingWay: "",
    uploadedDocuments: [],
    recivingType: "",
    recvingDate: "",
    price: 0,
    delivaryPrice: 0,
    progress: 0,
  },
};

const reducer = (
  state: ArticleState = initialState,
  action: Action
): ArticleState => {
  switch (action.type) {
    case ActionTypes.SET_ORDER:
      let order = state.order;
      if (action.payload.name === "finger") {
        console.log("run")
        const index = state.documents.findIndex(
          (item) => item.id === action.payload.data.id
        );
        if (index === -1) {
          return state;
        }
        state.documents[index] = action.payload.data;
        return state;
      }
      if (action.payload.name === "finishTime") {
        order.delivaryPrice = action.payload.price || 0;
      }
      if (
        (action.payload.name === "lang" && order.lang == "") ||
        (action.payload.name === "translateTo" && order.translateTo == "") ||
        (action.payload.name === "category" && order.category == "") ||
        (action.payload.name === "finishTime" && order.finishTime == "") ||
        (action.payload.name === "recivingWay" && order.recivingWay == "")
      ) {
        order.progress += 20;
      }
      if (
        state.order?.["subCategory"] != "" &&
        state.order?.["subCategory"] == action.payload.data
      ) {
        order = {
          ...state.order,
          [action.payload.name]: "",
        };
      } else if (action.payload.name == "doc") {
        if (
          state.documents.filter(
            (e: { id: string }) => e.id === action.payload.data.id
          ).length > 0
        ) {
          order.price -= action.payload.data.price;
          return {
            ...state,
            documents: state.documents.filter(
              (items: any) => items.id != action.payload.data.id
            ),
          };
        } else {
          state.documents.push(action.payload.data);
          order.price += action.payload.data.price;
        }
      } else {
        order = {
          ...state.order,
          [action.payload.name]: action.payload.data,
        };
      }
      return {
        ...state,
        order: order,
      };
    case ActionTypes.SET_TRANSLATE:
      return {
        ...state,
        translates:
          typeof action.payload === "object"
            ? [...state.translates, action.payload]
            : [],
      };
    case ActionTypes.SET_NEW_MESSAGE:
      return {
        ...state,
        ticketsMessage: [...state.ticketsMessage, action.payload],
        currentTicket: [...state.currentTicket, action.payload],
      };
    case ActionTypes.GET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };
    case ActionTypes.SET_CURRENT_MESSAGE:
      return {
        ...state,
        currentTicket: action.payload,
      };
    case ActionTypes.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case ActionTypes.GET_VERIFY_CODE:
      return {
        ...state,
        loginCode: typeof action.payload == "string" ? action.payload : "",
      };
    case ActionTypes.WRONG_CODE:
      return {
        ...state,
        wrongCode: typeof action.payload == "string" ? action.payload : "",
      };
    case ActionTypes.VERIFY_CODE:
      return {
        ...state,
        userProfile: action.payload ? action.payload : {},
      };
    case ActionTypes.DOC_CONTER:
      return {
        ...state,
        documents: action.payload.data,
      };
    default:
      return state;
  }
};

export default reducer;
