import React from "react";
import styled from "styled-components";
import TranslateStepsMobile from "./TranslateStepsMobile";

const TranslateSteps = () => {
  return (
    <Container>
      <div className="mobile">
        <TranslateStepsMobile />
      </div>
      <div className="wide">
        <div className="steps">
          <h3>مراحل انجام کار چیه؟</h3>
          {/* -----------------------------           Step 1         -------------------------------------- */}
          <div className="step-1 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/send-bg.png")',
                width: "150px",
                height: "132px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/goal1.png"
                alt=""
              />
            </div>
            <h4>ارسال مدارک ترجمه شده</h4>
            <p>
              پس از اتمام مراحل ترجمه رسمی و انجام هماهنگی‌ها از طرف ما، اسناد
              اصلی به همراه اسناد ترجمه شده برای شما ارسال خواهد شد
            </p>
          </div>
          {/* -----------------------------           Step 2        -------------------------------------- */}
          <div className="step-2 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/target-bg.png")',
                width: "200px",
                height: "186px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/target1.png"
                alt=""
              />
            </div>
            <h4>ترجمه مدارک و دریافت مهر دادگستری</h4>
            <p>
              پس از دریافت مدارک، مترجمین رسمی ما شروع به ترجمه اسناد می‌کنند و
              در صورت نیاز، اقدامات لازم برای اخذ مهر دادگستری و وزارت خارجه
              انجام می‌شود
            </p>
          </div>
          <div className="step-2 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/target-bg.png")',
                width: "200px",
                height: "186px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/target1.png"
                alt=""
              />
            </div>
            <h4></h4>
            <p></p>
          </div>
          {/* -----------------------------           Step  3       -------------------------------------- */}

          <div className="step-3 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/call-bg.png")',
                width: "140px",
                height: "144px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/discussion.png"
                alt=""
              />
            </div>
            <h4>تماس در صورت نیاز و ارسال مدارک</h4>
            <p>
              تیم پشتیانی ما در صورت نیاز با شما تماس خواهند گرفت تا هماهنگی‌ و
              راهنمایی لازم را برای ارسال مدارک انجام دهند
            </p>
          </div>
          {/* -----------------------------         Step   4      -------------------------------------- */}

          <div className="step-4 step">
            <h4>آپلود اسناد شما</h4>
            <p>
              پس از ثبت سفارش، سند مورد نظر خود را انتخاب و آن را در سایت آپلود
              کنید و همچنین از هزینه سفارش خود مطلع شوید
            </p>
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/upload-bg.png")',
                width: "170px",
                height: "132px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/web.png"
                alt=""
              />
            </div>
          </div>
          {/* -----------------------------           Step    5     -------------------------------------- */}

          <div className="step-5 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/order-bg.png")',
                width: "120px",
                height: "118px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/growth1.png"
                alt=""
              />
            </div>
            <h4>ثبت سفارش آنلاین ترجمه رسمی</h4>
            <p>
              وارد منوی ثبت سفارش ترجمه رسمی مدارک شوید و به سادگی سفارش خود را
              در دیلما ثبت کنید.
            </p>
          </div>
          <img
            src="/img/translate/officialTranslate/steps/wide-arrow.png"
            alt=""
            className="end-arrow"
          />
          <img
            src="/img/translate/officialTranslate/steps/wide-arrow.png"
            alt=""
            className="start-arrow"
          />
        </div>
        <svg className="circle" width="227" height="251" viewBox="0 0 227 251" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.5" cx="101.5" cy="125.5" r="108.5" stroke="#E8F0F2" strokeWidth="34" />
        </svg>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .wide {
    height: 505px;
    width: max-content;
    display: flex;
    justify-content: center;
    background: #ff683b;
    border-radius: 35px;
    color: #fff;
    position: relative;
    .circle {
      position: absolute;
      left: -122px;
      bottom: -100px;
    }
    .steps {
      min-width: 1198px;
      max-width: 1198px;
      position: relative;
    }
    h3 {
      position: absolute;
      top: 55px;
      right: 122px;
      font-weight: 900;
      font-size: 20px;
      line-height: 32px;
    }
    .step-1 {
      left: 106px;
      top: 188px;
    }
    .step-2 {
      left: 264px;
      top: 48px;
      img {
        margin: -30px -5px 0 0;
      }
    }
    .step-3 {
      left: 504px;
      top: 196px;
    }
    .step-4 {
      top: 130px;
      left: 700px;
      img {
        margin: -10px 10px 0 0;
      }
    }
    .step-5 {
      left: 920px;
      top: 150px;
    }
    .step {
      position: absolute;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      h4 {
        max-width: 153px;
        font-weight: 700;
        font-size: 15px;
        margin: 2em 0 1em 0;
      }
      p {
        font-weight: 400;
        max-width: 153px;
        font-size: 10px;
        line-height: 15px;
      }
    }
    .end-arrow {
      position: absolute;
      transform: rotate(180deg);
      left: 190px;
      top: 160px;
    }
    .start-arrow {
      position: absolute;
      left: 580px;
      top: 240px;
    }
    .step-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      background-repeat: no-repeat;
    }
  }
  @media screen and (max-width: 1024px) {
    .wide {
      h3 {
        position: absolute;
        top: 55px;
        right: 200px;
        font-weight: 900;
        font-size: 20px;
        line-height: 32px;
      }
      .step-1 {
        left: 160px;
        top: 188px;
      }
      .step-2 {
        left: 320px;
        top: 80px;
        img {
          margin: -30px -5px 0 0;
        }
      }
      .step-3 {
        left: 520px;
        top: 196px;
      }
      .step-4 {
        top: 150px;
        left: 690px;
        img {
          margin: -10px 10px 0 0;
        }
      }
      .step-5 {
        left: 880px;
        top: 170px;
      }
    }
  }
  @media screen and (max-width: 910px) {
    .wide {
      h3 {
        right: 250px;
      }
      .step {
        h4 {
          font-size: 13px;
          max-width: 130px;
        }
        p {
          max-width: 130px;
        }
      }
      .step-1 {
        left: 230px;
        top: 188px;
      }
      .step-2 {
        left: 350px;
        top: 80px;
        img {
          margin: -30px -5px 0 0;
        }
      }
      .step-3 {
        left: 520px;
        top: 196px;
      }
      .step-4 {
        top: 150px;
        left: 660px;
        img {
          margin: -10px 10px 0 0;
        }
      }
      .step-5 {
        left: 830px;
        top: 170px;
      }
    }
    .end-arrow {
      position: absolute;
      transform: rotate(180deg);
      left: 300px !important;
      top: 160px;
      width: 300px;
    }
    .start-arrow {
      position: absolute;
      left: 580px;
      top: 240px;
      width: 300px;
    }
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 768px) {
    .wide {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

export default TranslateSteps;
