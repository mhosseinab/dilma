import React from "react";
import styled from "styled-components";

const TranslatePrice = () => {
  return (
    <Container>
      <div className="header">
        <h2>برخی از موارد نرخی ترجمه در سال ۱۴۰۰</h2>
        <h3>مشاهده لیست کامل</h3>
      </div>
      <div className="prices">
        <div className="price">
          <div className="icon-1 icon">
            <img src="/img/translate/officialTranslate/id-cart1.png" alt="" />
          </div>
          <h6>شناسنامه</h6>
          <p className="total"> ۳۵۰۰۰ تومان</p>
        </div>
        <div className="price">
          <div className="icon-2 icon">
            <img src="/img/translate/officialTranslate/id-card.png" alt="" />
          </div>
          <h6>کارت ملی</h6>
          <p className="total"> ۳۵۰۰۰ تومان</p>
        </div>
        <div className="price">
          <div className="icon-3 icon">
            <img src="/img/translate/officialTranslate/open-book1.png" alt="" />
          </div>
          <h6>مدرک تحصیلی</h6>
          <p className="total"> ۳۵۰۰۰ تومان</p>
        </div>
        <div className="price">
          <div className="icon-4 icon">
            <img
              src="/img/translate/officialTranslate/list-search.png"
              alt=""
            />
          </div>
          <h6>ریز نمرات</h6>
          <p className="total"> ۳۵۰۰۰ تومان</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 4em;
  .header {
    height: 64px;
    width: 100%;
    background: #35589a;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    margin-bottom: 3em;
  }
  .prices {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 6em auto;
    max-width: 700px;
    .price {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h6 {
        margin: 1em 0;
        font-weight: 900;
        font-size: 16px;
        line-height: 26px;
      }
      .total {
        background: #ff683b;
        border-radius: 35px;
        color: #fff;
        padding: 0.5em 1em;
      }
      .icon-1 {
        border-radius: 35% 35% 70% 10%;
      }

      .icon-2 {
        border-radius: 55% 26% 33% 60% / 76% 21% 48% 24%;
      }
      .icon-3 {
        border-radius: 100% 0% 41% 61% / 54% 44% 48% 45%;
      }
      .icon-4 {
        border-radius: 54% 32% 56% 32% / 33% 44% 48% 27%;
      }
      .icon {
        width: 74px;
        height: 71px;
        background: #35589a;
        position: relative;
        img {
          position: absolute;
          top: -40px;
          right: -20px;
          width: 65px;
          height: 65px;
        }
      }
    }
  }
  @media screen and (max-width: 624px) {
    .prices {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      place-items: center;
      .price {
        height: 250px;
      }
    }
    .header {
      background-color: transparent;
      flex-direction: column;
      text-align: center;
      h2 {
        height: 64px;
        width: 100%;
        background: #35589a;
        font-weight: 900;
        font-size: 20px;
        line-height: 32px;
        padding: 1em 0;
      }
      h3 {
        color: #000;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        margin: 1em 0;
      }
    }
  }
`;

export default TranslatePrice;
