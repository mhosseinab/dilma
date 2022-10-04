/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import styled from "styled-components";
import shppingTimes from "lib/shippingTimes.json";
import Image from "next/image";

interface Props {
  setLevel: (event: number) => void;
}

const DeliveryTime: FC<Props> = ({ setLevel }) => {
  const [shipping, setShipping] = React.useState<{
    day: string;
    between: string;
  }>({
    day: "",
    between: "",
  });
  const setOrderHandler = (
    value: string | React.SetStateAction<{ day: string; between: string }>,
    name: string
  ) => {
    setShipping({ ...shipping, [name]: value });
  };
  return (
    <Container>
      <h3>تاریخ دریافت مدارک رو انتخاب کنید!</h3>
      <div className="content">
        <div className="card__container">
          <h5>تاریخ مد نظر خود را انتخاب کنید.</h5>
          <ul className="card">
            {shppingTimes.days.map((item, index) => (
              <li
                onClick={() => setOrderHandler(item.day, "day")}
                key={index}
                className={`${shipping.day === item.day && "active"}`}
              >
                <span> {item.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="img">
          <Image src="/img/icons/chevron.svg" alt="" layout="fill" />
        </div>
        <div className="card__container">
          <h5>ساعت مد نظر خود را انتخاب کنید.</h5>
          <ul className="card">
            {shppingTimes.bettwens.map((item, index) => (
              <li
                onClick={() => setOrderHandler(item, "between")}
                key={index}
                className={`${shipping.between === item && "active"}`}
              >
                <span>بازه {item} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button onClick={() => setLevel(9)} className="next">
        مرحله بعد
      </button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 0;
  align-items: flex-center;
  gap: 2em;
  padding-bottom: 50px;
  font-size: 20px;
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  .content {
    display: flex;
    align-items: center;
    gap: 1em;
    .img {
      position: relative;
      width: 19px;
      height: 31px;
      margin-top: 1.3em;
    }
  }
  h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #000000;
    opacity: 0.5;
    margin-bottom: 1em;
  }
  .card {
    width: 50%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
    li {
      width: 93px;
      height: 35px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all ease 0.3s;
      user-select: none;
      gap: 0.5em;
      background: #e7e7e7;
      border-radius: 5px;
      p {
        .price {
          font-weight: 700;
        }
      }
    }
  }
  .active {
    border: 1px solid #000;
  }
  @media screen and (max-width: 888px) {
    .content {
      flex-direction: column;
      .card {
        width: 100%;
      }
      img {
        align-self: center;
        transform: rotate(270deg);
      }
    }
  }
`;

export default DeliveryTime;
