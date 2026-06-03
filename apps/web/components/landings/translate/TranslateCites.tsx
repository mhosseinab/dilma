import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";

const menuItems = [
  { span: " ارائه خدمات در", strong: "تهران" },
  { span: "ارائه خدمات در ", strong: "شیراز" },
  { span: "ارائه خدمات در ", strong: "اصفهان" },
  { span: "ارائه خدمات در ", strong: "همدان" },
  { span: "ارائه خدمات در ", strong: "سمنان" },
  { span: "ارائه خدمات در ", strong: "اراک" },
];

const items = menuItems.map((item, index) => (
  <div style={{ width: 200 }} key={index} className="item">
    <span>
      {item.span} <strong>{item.strong}</strong>
    </span>
  </div>
));

const TranslateCites = () => {
  return (
    <Container>
      <div className="line">
        <div className="details wide">
          <span className="city city-1">
            ارائه خدمات در <strong>تهران</strong>
          </span>
          <span className="city city-2">
            ارائه خدمات در <strong>شیراز</strong>
          </span>
          <span className="city city-3">
            ارائه خدمات در <strong>اصفهان</strong>
          </span>
          <span className="city city-4">
            ارائه خدمات در <strong>همدان</strong>
          </span>
          <span className="city city-5">
            ارائه خدمات در <strong>سمنان</strong>
          </span>
          <span className="city city-6">
            ارائه خدمات در <strong>اراک</strong>
          </span>
        </div>
        <div className="map">
          <img src="/img/translate/officialTranslate/iran.png" alt="" />
        </div>
      </div>
      <div className="mobile">
        <AliceCarousel
          autoWidth
          disableButtonsControls
          mouseTracking
          items={items}
          autoPlay={false}
          disableDotsControls
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  margin: 6em 0;
  .map {
    width: 40%;
    display: flex;
    position: relative;
    display: flex;
    align-items: center;
    img {
      position: absolute;
    }
  }
  .details {
    width: 60%;
  }
  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .city {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: 15px;
      line-height: 24px;
      background: #305c7e;
      border-radius: 42px;
      color: #fff;
      padding: 0.6em 1.5em;
    }
    .city-1 {
      position: absolute;
      top: -20px;
      right: 10%;
    }
    .city-2 {
      position: absolute;
      top: -30px;
      right: 50%;
      background: rgba(48, 92, 126, 0.7);
    }
    .city-4 {
      position: absolute;
      bottom: -20px;
      right: 10%;
      background: rgba(48, 92, 126, 0.7);
    }
    .city-5 {
      position: absolute;
      bottom: -30px;
      right: 40%;
    }
    .city-6 {
      position: absolute;
      bottom: 20px;
      right: 70%;
      background: rgba(48, 92, 126, 0.7);
    }
  }
  .line {
    height: 150px;
    width: 100%;
    margin: auto 0;
    display: flex;
    position: relative;
    background: #e2e9eb;
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    display: flex;
    .map {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      height: 350px !important;
      padding-top: 1em;
      img {
        position: relative;
        width: 257px;
        height: 233px;
      }
    }
    .wide {
      display: none;
    }
    .mobile {
      display: flex;
      margin-top: 5em;
      padding: 2em 2em;
      .item {
        max-width: 200px;
      }
      span {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 15px;
        line-height: 24px;
        width: 190px;
        background: #305c7e;
        border-radius: 42px;
        color: #fff;
        padding: 0.6em 1.5em;
        cursor: move;
        user-select: none;
      }
    }
  }
`;

export default TranslateCites;
