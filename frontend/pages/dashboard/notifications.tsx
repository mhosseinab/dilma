import { Paper } from "@mui/material";
import ShortNotification from "components/dashboard/notifications";
import LayOut from "components/dashboard/UI/LayOut";
import React from "react";
import styled from "styled-components";

import messages from "lib/messages.json";

const Notifications = () => {
  return (
    <Container>
      <LayOut>
        <div className="wrapper">
          <ShortNotification />
          <div className="notification">
            {messages.map((message, index) => (
              <div key={index} className="notification__message">
                <p>{message.message} </p>
                <span className="date">{message.date}</span>
              </div>
            ))}
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
  .notification {
    background: #ffffff;
    box-shadow: 0px 4px 48px rgba(185, 185, 185, 0.32);
    width: 100%;
    .notification__message {
      background: #e7e7e7;
      border-radius: 5px;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      text-align: right;
      padding: 1em;
      margin: 3em;
      position: relative;
      .date {
        position: absolute;
        bottom: -24px;
        left: 0;
      }
      p {
        max-width: 100%;
      }
    }
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

export default Notifications;
