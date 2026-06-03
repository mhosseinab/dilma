import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import * as ActionCreators from "redux/ActionCreators";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketView: FC = () => {
  const [userTicketMessage, setUserTicketMessage] = React.useState("");

  const { ticketsMessage, currentTicket } = useSelector(
    (state: RootStateOrAny) => state
  );

  const dispatch = useDispatch();

  const { setNewMessage } = bindActionCreators(ActionCreators, dispatch);

  const setNewTicketMessageHandler = (
    event?: React.FormEvent<HTMLFormElement>
  ) => {
    event && event.preventDefault();
    let data = {
      name: "خودم",
      message: userTicketMessage,
      from: "me",
    };
    setNewMessage(data);
    setUserTicketMessage("");
  };

  let data = currentTicket ? currentTicket : ticketsMessage;

  return (
    <Container>
      <div className="title">
        <h3>پرداخت</h3>
        <span>28/12/1400</span>
      </div>
      <ToastContainer />
      {data?.map(
        (
          ticket: {
            from: string;
            name:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            message:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          },
          index: React.Key | null | undefined
        ) => (
          <div
            key={index}
            className={`${ticket.from === "support" ? "answer" : "question"}`}
          >
            <span className="name">{ticket.name}</span>
            <p>{ticket.message}</p>
          </div>
        )
      )}

      <form
        className="input"
        onSubmit={(e): void => setNewTicketMessageHandler(e)}
      >
        <input
          value={userTicketMessage}
          onChange={(e) => setUserTicketMessage(e.target.value)}
          placeholder="پاسخ خود را بنویسید"
          type="text"
        />
        <Image
          onClick={() => setNewTicketMessageHandler}
          src={"/img/icons/send.svg"}
          alt="send"
          width={12}
          height={14}
        />
      </form>
    </Container>
  );
};

const Container = styled.div`
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 3em 0;
    * {
      font-size: 16px;
    }
  }
  .answer {
    background: #e7e7e7;
    border-radius: 5px;
    width: 100%;
    position: relative;
    padding: 1em 2em;
    margin: 3em 0;

    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      text-align: right;
      color: #000000;
    }
    .name {
      position: absolute;
      top: -2em;
      right: 0;
      font-size: 12px;
      line-height: 18px;
    }
  }
  .question {
    background: #f79624;
    border-radius: 5px;
    width: 100%;
    margin: 3em 0;
    padding: 1em 2em;
    position: relative;
    p {
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      text-align: right;
      color: #fff;
    }
    .name {
      position: absolute;
      top: -2em;
      left: 0;
      font-size: 12px;
    }
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    padding: 0 1em;

    input {
      width: 100%;
      height: 38px;
      border: none;
      outline: none;
      box-shadow: none !important;
    }
    img {
      cursor: pointer;
    }
  }
`;

export default TicketView;
