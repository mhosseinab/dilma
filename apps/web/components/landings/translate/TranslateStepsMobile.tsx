import React from "react";
import styled from "styled-components";

const TranslateStepsMobile = () => {
  return (
    <Container>
      <div className="mobile">
        <div className="steps">
          {/* -----------------------------           Step 1         -------------------------------------- */}
          <div className="step-1 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/send-bg-mb.png")',
                width: "75px",
                height: "68px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/goal1.png"
                alt=""
                width={38}
                height={38}
              />
            </div>
            <div className="details">
              <h4>ارسال مدارک ترجمه شده</h4>
              <p>
                پس از اتمام مراحل ترجمه رسمی و انجام هماهنگی‌ها از طرف ما، اسناد
                اصلی به همراه اسناد ترجمه شده برای شما ارسال خواهد شد
              </p>
            </div>
          </div>
          {/* -----------------------------           Step 2        -------------------------------------- */}
          <div className="step-2 step">
            <div className="details">
              <h4>ترجمه مدارک و دریافت مهر دادگستری</h4>
              <p>
                پس از دریافت مدارک، مترجمین رسمی ما شروع به ترجمه اسناد می‌کنند
                و در صورت نیاز، اقدامات لازم برای اخذ مهر دادگستری و وزارت خارجه
                انجام می‌شود
              </p>
            </div>
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/target-bg-mb.png")',
                width: "111px",
                height: "104px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/target1.png"
                alt=""
                width={60}
                height={60}
              />
            </div>
          </div>
          {/* -----------------------------           Step  3       -------------------------------------- */}

          <div className="step-3 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/call-bg-mb.png")',
                width: "64px",
                height: "68px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/discussion.png"
                alt=""
                width={44}
                height={44}
              />
            </div>
            <div className="details">
              <h4>تماس در صورت نیاز و ارسال مدارک</h4>
              <p>
                تیم پشتیانی ما در صورت نیاز با شما تماس خواهند گرفت تا هماهنگی‌
                و راهنمایی لازم را برای ارسال مدارک انجام دهند
              </p>
            </div>
          </div>
          {/* -----------------------------         Step   4      -------------------------------------- */}

          <div className="step-4 step">
            <div className="details">
              <h4>آپلود اسناد شما</h4>
              <p>
                پس از ثبت سفارش، سند مورد نظر خود را انتخاب و آن را در سایت
                آپلود کنید و همچنین از هزینه سفارش خود مطلع شوید
              </p>
            </div>
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/upload-bg-mb.png")',
                width: "95px",
                height: "76px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/web.png"
                alt=""
                width={54}
                height={53}
              />
            </div>
          </div>
          {/* -----------------------------           Step    5     -------------------------------------- */}

          <div className="step-5 step">
            <div
              className="step-logo"
              style={{
                backgroundImage:
                  'url("/img/translate/officialTranslate/steps/order-bg-mb.png")',
                width: "81px",
                height: "84px",
              }}
            >
              <img
                src="/img/translate/officialTranslate/steps/growth1.png"
                alt=""
                width={57}
                height={57}
              />
            </div>
            <div className="details">
              <h4>ثبت سفارش آنلاین ترجمه رسمی</h4>
              <p>
                وارد منوی ثبت سفارش ترجمه رسمی مدارک شوید و به سادگی سفارش خود
                را در دیلما ثبت کنید.
              </p>
            </div>
          </div>
          <img
            src="/img/translate/officialTranslate/steps/arrow-mb.png"
            alt=""
            className="arrow-1 arrow"
          />
          <img
            src="/img/translate/officialTranslate/steps/arrow-mb.png"
            alt=""
            className="arrow-2 arrow"
          />
          <img
            src="/img/translate/officialTranslate/steps/arrow-mb.png"
            alt=""
            className="arrow-3 arrow"
          />
          <img
            src="/img/translate/officialTranslate/steps/arrow-mb.png"
            alt=""
            className="arrow-4 arrow"
          />
          <h3>مراحل انجام کار چیه؟</h3>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #ff683b;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  border-radius: 35px;
  min-width: 95vw;
  min-height: 1050px;
  .mobile {
    position: relative;
    height: 870px;
    color: #fff;
    .steps {
      width: 360px !important;
      display: flex;
      flex-direction: column-reverse;
      padding: 2em 0;
      h3 {
        padding-bottom: 1em;
        text-align: center;
        font-weight: 900;
        font-size: 23px;
      }
      .step {
        display: flex;
        position: absolute;
        z-index: 100;
        .details {
          display: flex;
          flex-direction: column;
          width: 140px;
          margin: 0 1em;
          text-align: center;
          h4 {
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            margin-bottom: 10px;
          }
          p {
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
          }
        }
      }
      .step-5 {
        top: 96px;
        right: 37px;
        img {
          margin: 10px 0 0 0;
        }
      }
      .step-4 {
        top: 290px;
        left: 90px;
        img {
          margin: 10px 18px 0 0;
        }
      }
      .step-3 {
        top: 485px;
        right: 40px;
        img {
          margin: 10px 8px 0 0;
        }
      }
      .step-2 {
        top: 650px;
        right: 37px;
        img {
          margin: 10px 20px 0 0;
        }
        .details {
          margin-top: 2em;
        }
      }
      .step-1 {
        top: 870px;
        right: 70px;
        img {
          margin: 15px 15px 0 0;
        }
        .details {
          margin-right: 40px;
        }
      }
    }
    .arrow {
      position: absolute;
      width: 320px;
    }
    .arrow-1 {
      top: 175px;
      left: 60px;
    }
    .arrow-2 {
      top: 270px;
      left: -65px;
      transform: rotate(90deg);
    }
    .arrow-3 {
      top: 550px;
      left: 60px;
    }
    .arrow-4 {
      top: 650px;
      left: -95px;
      transform: rotate(90deg);
    }
  }
`;

export default TranslateStepsMobile;
