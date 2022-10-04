import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import ourServices from "lib/translateServices.json";
import styled from "styled-components";

const TranslateVideos = () => {
  return (
    <Container>
      <AliceCarousel
        autoWidth
        disableButtonsControls
        mouseTracking
        // items={items}
      />
    </Container>
  );
};

const Container = styled.div`
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
      padding: 0 2em;
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

export default TranslateVideos;
