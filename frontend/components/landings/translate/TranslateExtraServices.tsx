import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import extraServices from "lib/extraServices.json";
import styled from "styled-components";

const items = extraServices.map((item, index) => {
  return (
    <div key={index} style={{ width: 470 }} className="item">
      <div className="child">
        <h6>{item.title}</h6>
        <div className="details">
          <img width={80} height={80} src={item.icon} alt="" />
          <p>{item.dec}</p>
        </div>
      </div>
    </div>
  );
});

const TranslateExtraServices = () => {
  return (
    <Container>
      <AliceCarousel
        autoWidth
        disableButtonsControls
        mouseTracking
        items={items}
        autoPlay={false}
        disableDotsControls
      />
      <svg className="circle" width="173" height="173" viewBox="0 0 173 173" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.5" cx="86.5" cy="86.5" r="69.5" stroke="#35589A" strokeWidth="34" />
      </svg>
    </Container>
  );
};
const Container = styled.div`
  background: #e2e9eb;
  width: 100%;
  padding: 7em 2em 4em 2em;
  height: 100%;
  user-select: none;
  cursor: move;
  position: relative;
margin: 8em 0;
  .circle {
    position: absolute;
    top: -85px;
    right: 4em;
  }
  .item {
    .child {
      text-align: right;
      padding: 1em 2em;
      margin: 0em 0;
      background-color: #fff;
      width: 420px;
    }
    h6 {
      font-weight: 700;
      font-size: 18px;
      line-height: 34px;
    }
    .details {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: center;
      gap: 1em;
      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: right;
      }
    }
  }
  .alice-carousel__stage {
   width: 100%;
  }
  @media screen and (max-width: 548px) {
    .item {
      width: 360px !important;
      height: 130px;
    }
    .child {
      width: 330px !important;
      height: 130px;

      h6 {
        font-size: 15px !important;
      }
    }
    .details {
      img {
        display: none;
      }
    }
  }
`;

export default TranslateExtraServices;
