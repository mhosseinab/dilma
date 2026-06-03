import React from "react";
import styled from "styled-components";
import ContentRewardsMobile from "./ContentRewardsMobile";

const ContentRewards = () => {
  return (
    <Container>
      <div className="line wide">
        <div className="chart item-1">
          <div className="item">
            <img src="/img/landing/content/rewards/Vector.svg" alt="" />
          </div>
          <h4>+2500</h4>
          <p>کاربران خوشحال</p>
        </div>
        <div className="chart item-2">
          <div className="item">
            <img src="/img/landing/content/rewards/Vector-1.svg" alt="" />
          </div>
          <h4>+2500</h4>
          <p>تعداد نظر ثبت شده</p>
        </div>
        <div className="chart item-3">
          <div className="item">
            <img src="/img/landing/content/rewards/Vector-2.svg" alt="" />
          </div>
          <h4>+2500</h4>
          <p>آمار تعداد کارهای انجام شده موفق در سایت</p>
        </div>
        <div className="chart  item-4">
          <div className="item">
            <img src="/img/landing/content/rewards/Vector-3.svg" alt="" />
          </div>
          <h4>+2500</h4>
          <p>زبان های تولید محتوا</p>
        </div>
      </div>
      <div className="mobile">
        <ContentRewardsMobile />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 250px;
  margin-top: 5em;
  background: #f8f8f8;
  .line {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1em;
    height: 92px;
    background: #a40a0a;
    font-weight: 600;
    .chart {
      height: 250px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 3em;
      z-index: 1000;
      p {
        max-width: 171px;
      }
    }
    .item-3 {
      margin-top: 5em;
      height: 300px;
    }
    .item {
      width: 183px;
      height: 183px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1.5em solid #1973cc;
      margin-bottom: 1em;
      background: #f8f8f8;
    }
    .trophy {
      margin-top: 3em;
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
  .mobile {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .trophy {
      display: none;
    }
    .item {
      width: 145px !important;
      height: 145px !important;
    }
  }
  @media screen and (max-width: 668px) {
    .wide {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export default ContentRewards;
