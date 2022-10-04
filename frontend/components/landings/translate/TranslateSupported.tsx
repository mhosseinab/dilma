import React from "react";
import styled from "styled-components";

const TranslateSupported = () => {
  return (
    <Container>
      <div className="dec">
        <h4>محلات تحت پوشش پیک</h4>
        <p>نام محله اول - نام محله دوم - نام محله سوم - نام محله چهارم</p>
        <p>نام محله اول - نام محله دوم - نام محله سوم - نام محله چهارم </p>
        <p>نام محله اول - نام محله دوم - نام محله سوم - نام محله چهارم </p>
      </div>
      <img src="/img/translate/officialTranslate/map.png" alt="" />
    </Container>
  );
};

const Container = styled.div`
  margin: 4em 2em;
  height: 231px;
  background: #ff683b;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
  font-size: 26px;
  p {
    font-weight: 700;
    font-size: 15px;
  }
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 35px;
  @media screen and (max-width: 1024px) {
    text-align: center;
    img {
      display: none;
    }
  }
  @media screen and (max-width: 568px) {
    margin: 1em 0;
    border-radius: 0;
    font-size: 23px;
    p {
      font-size: 14px;
    }
  }
`;

export default TranslateSupported;
