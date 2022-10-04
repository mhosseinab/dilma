import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import translateOptions from "lib/translateOptions.json";
import styled from "styled-components";

const items = translateOptions.map((item, index) => {
  return (
    <div key={index} className="item">
      <div className={`option`} key={index}>
        <div className="icon">
          <img src={item.icon} alt="" />
        </div>
        <h5>{item.title}</h5>
      </div>
      <div className="detail">
        <img src={item.img} alt="" />
        <p>{item.dec}</p>
      </div>
    </div>
  );
});

const TranslateOurOptionsMobile = () => {
  return (
    <Container>
      <div className="svg">
        <svg
          width="117"
          height="117"
          viewBox="0 0 117 117"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="67.884"
            y="-2.50989"
            width="87.1871"
            height="87.1871"
            rx="35.5"
            transform="rotate(53.8418 67.884 -2.50989)"
            stroke="black"
            strokeWidth="23"
          />
        </svg>
      </div>
      <AliceCarousel
        responsive={responsive}
        disableButtonsControls
        mouseTracking
        touchTracking
        items={items}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 4em 0;
  padding: 1em;
  position: relative;
  .svg {
    position: absolute;
    top: -3em;
    left: 2em;
    z-index: 1;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    user-select: none;
    gap: 2em;
    margin-top: 6em;
    .detail {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 2em;
      img {
        width: 100%;
      }
      p {
        max-width: 314px;
        text-align: center;
      }
    }
    .option {
      display: flex;
      flex-direction: row-reverse;
      gap: 1em;
      align-items: center;
      border-radius: 8px;
      border: 2px solid #151618;
      width: 100%;
      height: 100px;
      padding: 1em;
      cursor: pointer;
      .icon {
        background: #ffd692;
        border-radius: 8px;
        min-width: 64px !important;
        min-height: 64px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 35px !important;
          height: 35px !important;
        }
      }
    }
  }
`;

const responsive = {
  0: { items: 1 },
};
export default TranslateOurOptionsMobile;
