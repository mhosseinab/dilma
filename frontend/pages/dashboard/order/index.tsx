import LandingLayout from "components/landings/LadingLayout";
import DashboardOrderContainer from "containers/DashboardOrder";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";

const DashboardOrder = () => {
  const { replace } = useRouter();
  if (!Cookies.get("access")) {
    typeof window !== 'undefined' &&  replace("/login");
    return
  }
  return (
    <LandingLayout>
      <DashboardOrderContainer />
    </LandingLayout>
  );
};

export default DashboardOrder;
