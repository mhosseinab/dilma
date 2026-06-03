import React, { FC } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

import translateTime from "lib/translateTime.json";

interface Props {
  order: {
    delivery_options: string[][];
    delivery_price_base: number;
  };
}

const OrderTime: FC<Props> = ({ order }) => {
  const [finishTranslate, setFinishTranslate] = React.useState<{}>();

  const dispatch = useDispatch();

  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (value: string, price: number) => {
    setFinishTranslate(value);
    setOrderDetails({ name: "finishTime", data: value, price: price });
  };

  return (
    <Container className="border-right">
      <div className="bullet" />
      <h5 className="title-border">مهلت تحویل</h5>
      <ul>
        {translateTime.map((item, index) => (
          <li
            onClick={() => setOrderHandler(item.title, order.delivery_price_base * item.price_rate)}
            key={index}
            className={`${finishTranslate === item.title && "active"} ${
              order.delivery_options
                .map(
                  ([, value]) =>
                    value.indexOf(item.id) === 0 && true && "disable"
                )
                .includes("disable")
                ? ""
                : "disable"
            } `}
          >
            <p>
              <span>{item.title} </span>
              <span className="price"> {item.time}</span>
            </p>
            <span>{order.delivery_price_base * item.price_rate} تومان</span>
          </li>
        ))}
      </ul>
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
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    li {
      background: #e7e7e7;
      height: 46px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 5px;
      padding: 0 0.5em;
      cursor: pointer;
      transition: all ease 0.3s;
      user-select: none;
      p {
        margin-left: 3em;
        .price {
          font-weight: 700;
        }
      }
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
        border-radius: 5px;
      }
    }
    .disable {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
  .active {
    background: #f79624;
    color: #fff;
    box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
    border-radius: 5px;
  }
`;

export default OrderTime;
