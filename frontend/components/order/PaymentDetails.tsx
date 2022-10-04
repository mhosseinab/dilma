import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";

const PaymentDetails = () => {
  const paymentHandler = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    e.preventDefault();
  };
  const { order } = useSelector((state: RootStateOrAny) => state);

  return (
    <Container>
      <div className="details">
        <span>هزینه ارسال :{order.delivaryPrice} تومان </span>
        <span>هزینه کل :{+order.price + +order.delivaryPrice} هزار تومان</span>
      </div>
      <form className="actions" onSubmit={(e) => paymentHandler(e)}>
        <input type="text" placeholder="کد تخفیف خود را وارد کنید" />
        <input
          type="submit"
          value={`${order.price / 1000} هزار تومان - اتمام خرید`}
          onClick={(e) => paymentHandler(e)}
        />
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin: 2em 0;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 74px;
  .details {
    display: flex;
    gap: 1em;
    span {
      font-size: 15px;
      background: #ffffff;
      height: 38px;
      padding: 0 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 28px 5px rgba(185, 185, 185, 0.12);
    }
  }
  .actions {
    display: flex;
    align-items: center;
    gap: 1em;
    input {
      border-radius: 2em;
      border: 1px dashed #333;
      height: 38px;
      padding: 0 0.5em;
      box-shadow: none;
    }
    input[type="submit"] {
      background: #03ab00;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
      border-radius: 11px;
      color: #ffffff;
      border: none;
      padding: 0 1em;
    }
  }
  @media screen and (max-width: 875px) {
    flex-direction: column;
  }
  @media screen and (max-width: 525px) {
    .details,
    .actions {
      flex-direction: column;
      margin-bottom: 1em;
    }
    margin-bottom: 10em;
  }
`;

export default PaymentDetails;
