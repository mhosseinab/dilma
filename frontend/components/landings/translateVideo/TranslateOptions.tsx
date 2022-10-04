import React from "react";
import styled from "styled-components";

const TranslateOptions = () => {
  return (
    <Container>
      <div className="content">
        <div className="item">
          <div className="circle">
            <img src="/img/translate/Heart.png" alt="" />
          </div>
          <h3>ثبت سفارش آنلاین</h3>
          <p>
            با کلیک بر روی دکمه ثبت سفارش وارد منوی سفارش شوید و با انتخاب
            گزینه‌های مورد نظر خود، سفارشتان را ثبت کنید.
          </p>
        </div>
        <div className="line" />
        <div className="item">
          <div className="circle">
            <img src="/img/translate/Work.png" alt="" />
          </div>
          <h3>انتخاب مترجم</h3>
          <p>
            پس از ثبت سفارش، مترجم مورد نظر خود را از میان مترجمانی که سفارش شما
            را قبول کرده‌اند، انتخاب کنید تا کار ترجمه شما آغاز شو
          </p>
        </div>
        <div className="line" />
        <div className="item">
          <div className="circle">
            <img src="/img/translate/Star.png" alt="" />
          </div>
          <h3>تحویل سفارش</h3>
          <p>
            تحویل سفارش: فایل سفارش خود را از نویسنده تحویل بگیرید و بررسی‌ها و
            تاییدات نهایی را انجام دهید.
          </p>
        </div>
      </div>
      <img src="/img/translate/line.png" className="half-circle" alt="" />
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(265.38deg, #416168 -0.8%, #5c97ab 104.29%);
  min-height: 400px;
  position: relative;
  .content {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 5em 2em 0 2em;
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h3 {
        color: #ffffff;
      }
      .circle {
        width: 89px;
        height: 89px;
        border-radius: 50%;
        background: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        max-width: 135px;
        width: 135px;
        font-size: 12px;
        line-height: 15px;
        color: #ffffff;
      }
    }
  }
  .line {
    width: 200px;
    height: 2px;
    margin-top: 3em;
    background-color: #c9cbd1;
  }
  .half-circle {
    position: absolute;
    left: -5%;
    bottom: -37px;
    transform: rotate(270deg);
  }
  @media screen and (max-width: 600px) {
    .content {
      flex-direction: column;
      gap: 1.5em;
      padding: 2em 0;
      p {
        display: none;
      }
    }
    .line {
      display: none;
    }
  }
`;
export default TranslateOptions;
