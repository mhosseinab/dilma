import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

const RouteGuard = (router: any) => {
  console.log(router);
  if (router.asPath + "/dashboard*" && !Cookies.get("access")) {
    router.replace("/login");
    return;
  }
};

export default RouteGuard;
