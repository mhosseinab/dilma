import React, { FC } from "react";
import styled from "styled-components";
import * as ActionCreators from "redux/ActionCreators";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useRouter } from "next/router";

const NewTicket: FC = () => {
  const [userTicketTitle, setUserTicketTitle] = React.useState("");
  const [userTicketMessage, setUserTicketMessage] = React.useState("");

  const dispatch = useDispatch();

  const { setCurrentMessage } = bindActionCreators(ActionCreators, dispatch);

  const router = useRouter();

  const sendNewTicketHandler = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    let data = [
      {
        message: userTicketMessage,
        name: "پیام شما",
        from: "me",
      },
      {
        message:
          "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که ",
        name: "اپراتور",
        from: "support",
      },
    ];

    if (!userTicketMessage || !userTicketTitle) {
      toast.error("لطفا تمام فیلد ها را وارد کنید ");
      return;
    }
    setCurrentMessage(data);
    router.push("/dashboard/tickets");
  };

  return (
    <Container>
      <div className="title">
        <h3>ارسال تیکت جدید</h3>
        <span>28/12/1400</span>
      </div>
      <form onSubmit={(event) => sendNewTicketHandler(event)}>
        <ToastContainer />
        <input
          value={userTicketTitle}
          onChange={(event) => setUserTicketTitle(event.target.value)}
          type="text"
          placeholder="عنوان تیکت را وارد کنید"
        />
        <textarea
          rows={8}
          placeholder="جزییات مد نطر خود را بنویسید"
          value={userTicketMessage}
          onChange={(event) => setUserTicketMessage(event.target.value)}
        ></textarea>
        <button
          onClick={(event) => sendNewTicketHandler(event)}
          className="button"
        >
          ارسال تیکت
        </button>
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
  input,
  textarea {
    width: 100%;
    margin: 1em 0;
    padding: 1em;
    border: none;
    outline: none;
  }
  .button {
    background: #03ab00;
    border-radius: 3px;
    color: #fff;
    width: fit-content;
    padding: 0.5em 2em;
  }
`;

export default NewTicket;
