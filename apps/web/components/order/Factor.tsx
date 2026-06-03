import FactorDropDown from "./ui/FactorDropDown";
import React, { FC } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

interface Props {
  orderTypes: string[];
}

const OrderFactor: FC<Props> = ({ orderTypes }) => {
  const [factor, setFactor] = React.useState("");
  const factorItems = orderTypes?.map((item) => item[1]);
  const dispatch = useDispatch();

  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (value: string) => {
    setFactor(value);
    setOrderDetails({ name: "factor", data: value });
  };

  return (
    <Container className="border-right">
      <div className="bullet-blue" />
      <h5 className="title-border">فاکتور موارد انتخاب شده.</h5>
      <FactorDropDown
        items={factorItems}
        setValue={setOrderHandler}
        value={factor}
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding-bottom: 50px;
  font-size: 20px;
  border-right: 0;
  .title-border {
    min-width: fit-content;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default OrderFactor;
