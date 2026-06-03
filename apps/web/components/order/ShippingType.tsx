import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

const ShippingType = () => {
  const [shipping, setShipping] = React.useState<{}>();
  const shippingItems = [
    " فقط آپلود مدارک",
    "ارسال و آپلود مدارک ",
    "فقط ارسال مدارک",
  ];
  const dispatch = useDispatch();

  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (value : string) => {
    setShipping(value);
    setOrderDetails({ name: "recivingWay", data: value });
  };

  return (
    <Container className="border-right">
      <div className="bullet" />
      <h5 className="title-border">شیوه دریافت مدارک از سمت شما چیست؟ </h5>
      <ul>
        {shippingItems.map((item, index) => (
          <li
            onClick={() => setOrderHandler(item)}
            key={index}
            className={`${shipping === item && "active"}`}
          >
            <span>{item} </span>
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
      justify-content: center;
      border-radius: 5px;
      padding: 0 0.5em;
      cursor: pointer;
      transition: all ease 0.3s;
      user-select: none;
      min-width: 30%;
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
        border-radius: 5px;
      }
    }
  }
  .active {
    background: #f79624;
    color: #fff;
    box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
    border-radius: 5px;
  }
`;

export default ShippingType;
