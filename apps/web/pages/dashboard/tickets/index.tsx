import LayOut from "components/dashboard/UI/LayOut";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import TicketShowMore from "components/dashboard/ticket/TicketShowMore";
import TicketView from "components/dashboard/ticket/TicketView";
import NewTicket from "components/dashboard/ticket/NewTicket";

const Tickets: NextPage = () => {
  return (
    <Container>
      <LayOut
        buttonTitle="ارسال تیکت جدید"
        title="پشتیبانی"
        link="/dashboard/tickets/new"
      >
        <div className="wrapper">
          <TicketShowMore />
          <div className="tickets__chat">
            <TicketView />
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
  .tickets__chat {
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
