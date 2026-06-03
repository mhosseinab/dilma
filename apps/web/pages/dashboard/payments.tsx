import LayOut from "components/dashboard/UI/LayOut";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import PaymentsShowMore from "components/dashboard/payments/PaymentsShowMore";
import PaymentDetails from "components/dashboard/payments/PaymentDetails";

import data from "lib/paymentDetails.json";

const Tickets: NextPage = () => {
  return (
    <Container>
      <LayOut>
        <div className="wrapper">
          <PaymentsShowMore />
          <div className="payments__view">
            <PaymentDetails
              date={data.date}
              title={data.title}
              totalPrice={data.totalPrice}
              price={data.price}
              details={data.details}
            />
          </div>
        </div>
      </LayOut>
    </Container>
  );
};

const Container = styled.div`
  .wrapper {
    display: flex;
  }
  .content {
    padding: 0;
  }
  .payments__view {
    background: #ffffff;
    box-shadow: 0px 4px 48px rgba(185, 185, 185, 0.32);
    width: 100%;
    padding: 2em;
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      > div {
        width: 100%;
        max-width: 100%;
        min-height: fit-content;
      }
    }
  }
`;

export default Tickets;
