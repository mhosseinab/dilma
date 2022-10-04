import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";

const ContentPrice = () => {
  return (
    <Container>
      <div className="carousel">
        {/* items and data in the bottom of code */}
        <AliceCarousel
          autoWidth
          autoHeight
          mouseTracking
          disableButtonsControls
          items={items}
          disableDotsControls
          autoPlayDirection="rtl"
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 250px;
  .carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100px;
  }
  .card_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    cursor: move;
    gap: 2em;
    .card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2em;
      width: 222px;
      height: 212px;
      background: #ffffff;
      /* Smoothshadow 1 */

      box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
        0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
      border-radius: 9px;
    }
    a {
      text-decoration: none;
      width: 152px;
      height: 44px;
      background: #a40a0a;
      border-radius: 35px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: right;
    }
  }
  .alice-carousel__stage {
    display: flex;
    li {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 618px) {
    height: 300px;
    .item {
      width: 180px !important;
    }
    .carousel {
      position: relative;
      top: 0;
      .card_container {
        .card {
          width: 144px;
          height: 138px;
          gap: 1em;
          text-align: center;
          img {
            width: 60px;
            height: 60px;
          }
        }
        a {
          width: 142px;
          height: 44px;
        }
      }
    }
  }
`;

const prices = [
  {
    title: "تولید محتوای متنی",
    icon: "/img/landing/content/prices/copy.svg",
    price: "۳۵۰۰۰",
  },
  {
    title: "تولید محتوای ویدیویی",
    icon: "/img/landing/content/prices/video-chat.svg",
    price: "۳۵۰۰۰",
  },
  {
    title: "شبکه‌های اجتماعی",
    icon: "/img/landing/content/prices/switch.svg",
    price: "۳۵۰۰۰",
  },
  {
    title: "ایمیل",
    icon: "/img/landing/content/prices/email.svg",
    price: "۳۵۰۰۰",
  },
  {
    title: "بازنویسی متن",
    icon: "/img/landing/content/prices/edit.svg",
    price: "۳۵۰۰۰",
  },
];
const items = prices.reverse().map((item, index) => {
  return (
    <div
      style={{ width: 250, height: 400 }}
      key={index}
      className="item"
      data-value={index + 1}
    >
      <div className="card_container">
        <div className="card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.icon} alt="" />
          <h5>{item.title}</h5>
        </div>
        <a href="#" dir="rtl">
          {item.price}
          {" تومان "}
        </a>
      </div>
    </div>
  );
});

export default ContentPrice;
