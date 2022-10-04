import HomeOrder from "components/dashboard/home/HomeOrders";
import NewOrder from "components/dashboard/home/NewOrder";
import React from "react";
import styled from "styled-components";
import LayOut from "components/dashboard/UI/LayOut";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { replace } = useRouter();
  if (!Cookies.get("access")) {
    // typeof window !== 'undefined' &&  replace("/login");
    // return;
  }
  return (
    <Container>
      <LayOut
        link="/dashboard/projects"
        buttonTitle="سفارش جدید"
        title="داشبورد"
      >
        <HomeOrder />
        <NewOrder />
      </LayOut>
    </Container>
  );
};

const Container = styled.div`
  .content {
    padding: 3em;
  }
`;

export default Dashboard;
