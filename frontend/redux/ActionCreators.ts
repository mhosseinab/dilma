import { Action } from "./Actions";
import { ActionTypes } from "./ActionTypes";
import { Dispatch } from "redux";
import axios from "axios";
import { get_token, refreshTokenApi, verify_code , getConfigApi } from "lib/api";

import cookie from "js-cookie";
import { useRouter } from "next/router";

export const setTranslate = (translate: any) => {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionTypes.SET_TRANSLATE,
      payload: translate,
    });
  };
};

export const getVerifyCode = (phone: any) => {
  const raw = JSON.stringify({
    mobile: phone,
  });

  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(get_token, raw, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await response;
      cookie.set("uuid", data.uuid);
      dispatch({
        type: ActionTypes.GET_VERIFY_CODE,
        payload: data.uuid,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const verifyCode = (id: string, code: string) => {
  const raw = JSON.stringify({
    uuid: id,
    token: code,
  });

  cookie.remove("access");
  cookie.remove("refresh");

  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.WRONG_CODE,
      payload: null,
    });
    try {
      const response = await axios.post(verify_code, raw, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await response;
      
      console.log(data)
      if (data.success) {
        cookie.set("access", data.access);
        cookie.set("refresh", data.refresh);
        dispatch({
          type: ActionTypes.VERIFY_CODE,
          payload: data.authenticatedUser,
        });
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.WRONG_CODE,
        payload: {
          message: "کد وارد شده اشتباه است",
        },
      });
    }
  };
};

export const RefreshToken = (id: any) => {
  const router = useRouter()
  const raw = JSON.stringify({
    refresh: id,
  });
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(refreshTokenApi, raw, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data } = await response;
      console.log(data)
      if (data.access) {
        router.push("/dashboard")
        cookie.set("access", data.access);
        cookie.set("refresh", data.refresh);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getConfig = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.get(getConfigApi);
      const { data } = await response;
      dispatch({
        type: ActionTypes.GET_CONFIG,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const setNewMessage = (ticket: any) => {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionTypes.SET_NEW_MESSAGE,
      payload: ticket,
    });
  };
};

export const setUserProfile = (details: any) => {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionTypes.SET_USER_PROFILE,
      payload: details,
    });
  };
};

export const setCurrentMessage = (ticket: any) => {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionTypes.SET_CURRENT_MESSAGE,
      payload: ticket,
    });
  };
};
export const setOrderDetails = (order: { name: string; data: any ; price? : number }) => {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionTypes.SET_ORDER,
      payload: {
        name: order.name,
        data: order.data,
        price: order.price
      },
    });
  };
};

export const setCounter = (count: any) => {
  return (dispatch: Dispatch<Action>): void => {
    dispatch({
      type: ActionTypes.DOC_CONTER,
      payload: count,
    });
  };
};
