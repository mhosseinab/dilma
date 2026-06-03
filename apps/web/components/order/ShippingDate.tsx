/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

import shppingTimes from "lib/shippingTimes.json";
import moment from "moment-jalaali";

import { useDispatch } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

const ShippingDate = () => {
  const [shipping, setShipping] = React.useState<{
    day: string;
    between: string;
  }>({
    day: "",
    between: "",
  });
  const dispatch = useDispatch();
  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (
    value: string | React.SetStateAction<{ day: string; between: string }>,
    name: string
  ) => {
    setShipping({ ...shipping, [name]: value });
    setOrderDetails({ name: "shipping-" + name, data: value });
  };

  return (
    <Container className="border-right">
      <div className="bullet" />
      <h5 className="title-border">زمان تحویل را انتخاب کنید </h5>
      <div className="content">
        <ul className="card">
          {shiipingTimes.days.map((item, index) => (
            <li
              onClick={() => setOrderHandler(item.date.toString(), "day")}
              key={index}
              className={`${shipping.day === item.date.toString() && "active"}`}
            >
              <span>
                {new Intl.DateTimeFormat("fa-IR", { weekday: "long" }).format(
                  item.date
                )}
              </span>
              |
              <span> {new Intl.DateTimeFormat("fa-IR").format(item.date)}</span>
            </li>
          ))}
        </ul>
        <img src="/img/icons/chevron.svg" alt="" width={25} />
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
  .content {
    display: flex;
    gap: 1em;
  }
  .card {
    width: 50%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5em;
    li {
      height: 46px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 45px;
      cursor: pointer;
      transition: all ease 0.3s;
      user-select: none;
      border: 1px dashed #333;
      gap: 0.5em;
      p {
        .price {
          font-weight: 700;
        }
      }
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
      }
    }
  }
  .active {
    background: #f79624;
    color: #fff;
    box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
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
const shiipingTimes = {
  days: [
    { date: new Date() },
    { date: new Date().setDate(new Date().getDate() + 1) },
    { date: new Date().setDate(new Date().getDate() + 2) },
    { date: new Date().setDate(new Date().getDate() + 3) },
  ],
  bettwens: ["13 تا 15", "10 تا 13", "8 تا 10", "5 تا 8"],
};

export default ShippingDate;
