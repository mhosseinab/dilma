import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import ourServices from "lib/translateServices.json";
import styled from "styled-components";

const items = ourServices.map((item, index) => {
  return (
    <div style={{ width: 200 }} key={index} className="item">
      <div className="icon">
        <img src={item.icon} alt="" />
      </div>
      <h6>{item.title}</h6>
    </div>
  );
});

const TranslateOurServices = () => {
  return (
    <Container>
      <h1>خدمات ما</h1>
      <div className="carousel">
        <div className="bg">
          <AliceCarousel
            autoWidth
            disableButtonsControls
            mouseTracking
            disableDotsControls
            items={items}
          />
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
margin: 8em 0 18em 0;
  h1 {
    text-align: center;
    margin: 2em 0;
  }
  .carousel {
    position: relative;
    background: rgba(196, 196, 196, 0.5);
    width: 100%;
    height: 156px;
    user-select: none;
    .bg {
      width: 100%;
      padding: 0 4em;
      position: absolute;
      top: 46px;
      left: 0;
      cursor: pointer;
    }
  }
  .item {
    font-weight: 700;
    font-size: 20px;
    line-height: 31px;
    text-align: center;
    width: 200px;
    h6 {
      margin: 2em auto 0 -50px;
    }
  }
  .icon {
    width: 156px;
    height: 156px;
    background: #ffca41;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 45px;
    }
  }
  .alice-carousel__stage {
    display: flex;
    li {
      margin: auto;
    }
  }
`;

const responsive = {
  0: { items: 1 },
  400: { items: 2 },
  568: { items: 3 },
  800: { items: 4 },
  1024: { items: 6 },
};

export default TranslateOurServices;
