/* eslint-disable react-hooks/exhaustive-deps */
import AuthLogin from "components/auth/Login";
import Cookies from "js-cookie";

import { NextPage } from "next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { RefreshToken } from "redux/ActionCreators";

const Login: NextPage | any = () => {
  const dispatch = useDispatch()
  if (Cookies.get("refresh")) {
    dispatch(RefreshToken(Cookies.get("refresh")))
    return
  }
  return <AuthLogin />;
};

export default Login;
