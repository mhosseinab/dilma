import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
const itemsValue = [
  {
    title: "کاربران خوشحال",
    value: "+۲۵۰۰",
    img: "/img/landing/content/rewards/Vector.svg",
  },
  {
    title: "تعداد نظر ثبت شده",
    value: "+۲۵۰۰",
    img: "/img/landing/content/rewards/Vector-1.svg",
  },
  {
    title: "آمار تعداد کارهای انجام شده موفق در سایت",
    value: "+۲۵۰۰",
    img: "/img/landing/content/rewards/Vector-2.svg",
  },
  {
    title: "زبان های تولید محتوا",
    value: "+۲۵۰۰",
    img: "/img/landing/content/rewards/Vector-3.svg",
  },
];

const items = itemsValue.map((item, index) => (
  <div key={index} style={{ width: 200 }} className={`chart`}>
    <div className="circle">
      <img src={item.img} alt="" />
    </div>
    <h4>{item.value}</h4>
    <p>{item.title}</p>
  </div>
));

const ContentRewardsMobile = () => {
  return (
    <Container>
      <div className="line-mobile">
        <AliceCarousel
          autoWidth
          disableButtonsControls
          mouseTracking
          items={items}
          autoPlay={false}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #f8f8f8;
  .line-mobile {
    display: flex;
    font-weight: 600;
    background: #a40a0a;
    height: 92px;
    margin-top: 2em;
    .chart {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .alice-carousel__wrapper {
      margin-top: -1.5em;
    }
    .circle {
      width: 143px;
      height: 143px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1.5em solid #1973cc;
      margin-bottom: 1em;
      background: #f8f8f8;
    }
  }
`;

export default ContentRewardsMobile;
