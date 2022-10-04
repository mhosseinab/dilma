/* eslint-disable @next/next/no-img-element */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

import examples from "lib/translateExpamples.json";

const itemsLength = examples;

const items = itemsLength.map((item, index) => {
  const style = { width: 280 };
  return (
    <div
      dir="rtl"
      className={`item item-${index + 1} `}
      key={index}
      // style={{ width: index == 2 ? "280px" : "280px" }}
    >
      <img src={item.img} alt="" />
      <h3>{item.title}</h3>
      <p>{item.dec}</p>
    </div>
  );
});

const TranslateExamples = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }: any) => setActiveIndex(item);
  return (
    <Container
      style={{
        backgroundImage: 'url("/img/translate/bg.png")',
      }}
    >
      <div className="title-actions">
        <div onClick={slideNext} className="btn next">
          <svg
            width="14"
            height="20"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.828 5.00008L5.657 7.82808L4.243 9.24308L0 5.00008L4.243 0.75708L5.657 2.17208L2.828 5.00008Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="title">
          <h1>نمونه های تولید شده</h1>
          <p>نمونه کارهای ما را در حوزه ترجمه فیلم و تولید زیرنویس ببینید.</p>
        </div>
        <div onClick={slidePrev} className="btn prev">
          <svg
            width="14"
            height="20"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.828 5.00008L5.657 7.82808L4.243 9.24308L0 5.00008L4.243 0.75708L5.657 2.17208L2.828 5.00008Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <AliceCarousel
        // responsive={responsive}
        autoWidth
        ssrSilentMode
        mouseTracking
        touchTracking
        disableButtonsControls
        disableDotsControls
        autoPlay={false}
        activeIndex={activeIndex}
        onSlideChanged={syncActiveIndex}
        items={items}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: repeat;
  background-position: center;
  padding: 2em;
  .title-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4em 0;
    width: 100%;
    gap: 3em;
    color: #626262;
    text-align: center;
    h1 {
      font-weight: 700;
      font-size: 19px;
      line-height: 39px;
      text-align: center;
    }
    p {
      font-size: 14px;
    }
  }
  .btn {
    background: #ffffff;
    border-radius: 8px;
    min-width: 48px;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
  }
  .next {
    transform: rotate(180deg);
  }
  .item {
    user-select: none;
    text-align: right;
    padding-bottom: 9em;
    img {
      width: 250px;
      height: 200px;
    }
    p {
      width: 250px;
      font-weight: 300;
      font-size: 12px;
      line-height: 24px;
    }
  }
  .item {
    width: 280px;
    border-radius: 17px 17px 0 0;
    overflow: hidden;
  }
  @media screen and (max-width: 624px) {
    .item-2 {
      width: 280px;
      img {
        width: 250px !important;
        height: 200px !important;
      }
      h3,
      p {
        margin-top: 0 !important;
      }
    }
  }
  @media screen and (max-width: 900px) {
    .item-2 {
      img {
        width: 90%;
        height: 100%;
      }
      h3,
      p {
        margin-top: 1em;
      }
    }
  }
  @media screen and (min-width: 1500px) {
    .item-3 {
      width: 315px;

      img {
        width: 100%;
        height: 100%;
      }
      h3,
      p {
        margin-top: 1em;
      }
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
  600: { items: 2 },
  973: { items: 3 },
  1190: { items: 4 },
  1500: { items: 5 },
};

export default TranslateExamples;
