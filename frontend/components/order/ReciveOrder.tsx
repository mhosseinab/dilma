/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

import revingData from "lib/revingOrder.json";

const ReciveOrder = () => {
  const [reving, setReciving] = React.useState("");
  const dispatch = useDispatch();
  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (value: string) => {
    setReciving(value);
    setOrderDetails({ name: "recivingType", data: value });
  };

  return (
    <Container className="border-right">
      <div className="bullet" />
      <h5 className="title-border"> شیوه تحویل مدارک</h5>
      <div className="cards">
        {revingData.map((res, index) => (
          <div
            className={`card  ${reving === res.title && "active"}`}
            key={index}
            onClick={() => setOrderHandler(res.title)}
          >
            <div className="icon">
              <img src={res.icon} alt="icon" width={50} height={50} />
              {res.title}
            </div>
            <p>{res.decreption}</p>
          </div>
        ))}
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

  .cards {
    display: flex;
    align-items: center;
    gap: 2em;
    .card {
      display: flex;
      gap: 1em;
      align-items: center;
      padding: 1em;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-weight: 700;
        font-size: 20px;
      }
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
      }
    }
    .active {
      border: 1px solid #000000;
    }
    p {
      font-size: 11px;
      font-weight: 700;
    }
  }
  @media screen and (max-width: 888px) {
    .cards {
      flex-direction: column;
    }
  }
`;

export default ReciveOrder;
