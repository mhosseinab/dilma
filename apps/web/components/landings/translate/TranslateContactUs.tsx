/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const TranslateContactUs = () => {
  return (
    <Container>
      <div className="contact">
        <div className="icon">
          <img src="/img/translate/officialTranslate/speaker.png" alt="" />
        </div>
      </div>
      <p className="contact-text">با ما در ارتباط باشید.</p>
      <div className="number">۰۲۱۶۷۴۵۸۷۶۵</div>
      <a>ارسال سفارش از واتساپ</a>
    </Container>
  );
};
const Container = styled.div`
  height: 140px;
  background: #e2e9eb;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  margin: 9em 0 5em 0;
  .contact {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 100px;
  }
  .contact-text {
    font-weight: 400;
    font-size: 26px;
    line-height: 45px;
  }
  .number {
    background: #305c7e;
    padding: 0.5em 2em;
    box-shadow: 0px 22px 217px rgba(0, 0, 0, 0.13),
      0px 11.0107px 108.606px rgba(0, 0, 0, 0.0435433),
      0px 6.63236px 65.4192px rgba(0, 0, 0, 0.0306872),
      0px 4.25036px 41.924px rgba(0, 0, 0, 0.028355),
      0px 2.75474px 27.1718px rgba(0, 0, 0, 0.0301503),
      0px 1.73408px 17.1043px rgba(0, 0, 0, 0.0329746),
      0px 0.996336px 9.8275px rgba(0, 0, 0, 0.0341041),
      0px 0.438513px 4.32534px rgba(0, 0, 0, 0.0291046);
    border-radius: 3px;
    color: #fff;
  }
  a {
    background: #ff683b;
    padding: 0.5em 2em;
    box-shadow: 0px 22px 217px rgba(0, 0, 0, 0.13),
      0px 11.0107px 108.606px rgba(0, 0, 0, 0.0435433),
      0px 6.63236px 65.4192px rgba(0, 0, 0, 0.0306872),
      0px 4.25036px 41.924px rgba(0, 0, 0, 0.028355),
      0px 2.75474px 27.1718px rgba(0, 0, 0, 0.0301503),
      0px 1.73408px 17.1043px rgba(0, 0, 0, 0.0329746),
      0px 0.996336px 9.8275px rgba(0, 0, 0, 0.0341041),
      0px 0.438513px 4.32534px rgba(0, 0, 0, 0.0291046);
    border-radius: 3px;
    color: #fff;
  }
  .icon {
    width: 89px;
    height: 89px;
    background: #ff683b;
    border-radius: 70% 50% 100% 40% / 60% 40% 100% 40%;
    position: absolute;

    img {
      position: absolute;
      top: -30px;
      right: -30px;
    }
  }
  @media screen and (max-width: 868px) {
    .contact-text,
    .contact {
      display: none;
    }
  }
  @media screen and (max-width: 450px) {
    flex-direction: column;
    .number,
    a {
      width: 250px;
      text-align: center;
    }
  }
`;

export default TranslateContactUs;
