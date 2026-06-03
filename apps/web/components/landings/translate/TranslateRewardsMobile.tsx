import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";
const itemsValue = [
  {
    title: "کارفرمای خوشحال",
    value: "+۲۵۰۰",
    img: "/img/translate/officialTranslate/rewards/Vector-3.svg",
  },
  {
    title: "مترجم متخصص",
    value: "+۲۵۰۰",
    img: "/img/translate/officialTranslate/rewards/Vector.svg",
  },
  {
    title: "کلمه ترجمه",
    value: "+۲۵۰۰",
    img: "/img/translate/officialTranslate/rewards/Vector-2.svg",
  },
  {
    title: "پروژه موفق",
    value: "+۲۵۰۰",
    img: "/img/translate/officialTranslate/rewards/Vector-1.svg",
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

const TranslateRewardsMobile = () => {
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
    background: #305c7e;
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
      border: 1.5em solid #ff683b;
      margin-bottom: 1em;
      background: #f8f8f8;
    }
    .trophy {
      position: relative;
      width: 153px;
      height: 153px;
      border-radius: 70% 50% 100% 40% / 60% 40% 100% 40%;
      box-shadow: 0px 22px 217px rgba(0, 0, 0, 0.13),
        0px 11.0107px 108.606px rgba(0, 0, 0, 0.0435433),
        0px 6.63236px 65.4192px rgba(0, 0, 0, 0.0306872),
        0px 4.25036px 41.924px rgba(0, 0, 0, 0.028355),
        0px 2.75474px 27.1718px rgba(0, 0, 0, 0.0301503),
        0px 1.73408px 17.1043px rgba(0, 0, 0, 0.0329746),
        0px 0.996336px 9.8275px rgba(0, 0, 0, 0.0341041),
        0px 0.438513px 4.32534px rgba(0, 0, 0, 0.0291046);
      .icon {
        width: 153px;
        height: 153px;
        background: #f8f8f8;
        border-radius: 70% 50% 100% 40% / 60% 40% 100% 40%;
        position: absolute;

        img {
          position: absolute;
          top: -80px;
          right: -15px;
        }
      }
    }
  }
`;

export default TranslateRewardsMobile;
