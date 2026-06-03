import React from "react";
import styled from "styled-components";

const TranslateDescribe = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <div className="content">
        <div className="title">
          <h4>
            توضیح در مورد قانون‌های ترجمه و اهمیت ارسال مدارک به دارالترجمه
          </h4>
          <p>
            اولین گام برای مهاجرت تحصیلی، ترجمه مدارک است که باید توسط متخصصین
            باتجربه انجام شود.
          </p>
          {show && (
            <p className="showMore">
              ترجمه رسمی یکی از مهمترین اقدامات برای هرگونه مهاجرت تحصیلی، بورسی
              و تجارت با شرکت‌های خارجی است که باید به صورت دقیق و بی نقص انجام
              شود. همچنین برخی از مدارک باید در صورت نیاز، مهر تاییدیه دادگستری
              داشته باشند. روند این کارها بسیار دشوار و زمان‌بر است و حتما باید
              توسط مترجمین رسمی دوره دیده و یک مرکز معتبر انجام شود.  دیلما
              ارائه دهنده انواع خدمات ترجمه رسمی با بهترین کیفیت و در سریعترین
              زمان ممکن است. پس بدون نگرانی ترجمه رسمی مدارک خود را به ما
              بسپارید
            </p>
          )}
        </div>
        <button onClick={() => setShow(!show)}>
          {show ? "بستن" : "اطلاعات بیشتر"}
        </button>
        <div className="icon">
          <img src="/img/translate/officialTranslate/speaker.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5em 0;
  .content {
    display: flex;
    flex-direction: column;
    background: #e8f0f2;
    position: relative;
    min-height: 151px;
    border-radius: 35px;
    width: 100%;
    max-width: 780px;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 2em 2em;
      font-weight: 900;
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      color: #ff683b;
      p {
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
        max-width: 582px;
        color: #000;
      }
      .showMore {
        margin: 2em 0;
        opacity: 0.8;
        font-weight: 100;
      }
    }
    button {
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      text-align: right;
      min-height: 50px;
      width: 150px;
      text-align: center;
      background: #ff683b;
      border-radius: 35px;
      color: #ffffff;
      margin: 0 auto;
      margin-top: -0.5em;
      position: absolute;
      bottom: -25px;
      left: calc(50% - 75px);
    }
    .icon {
      width: 89px;
      height: 89px;
      background: #ff683b;
      border-radius: 70% 50% 100% 40% / 60% 40% 100% 40%;
      position: absolute;
      top: -30px;
      right: -60px;
      img {
        position: absolute;
        top: -30px;
        right: -30px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .content {
      background: transparent;
      .title {
        h4 {
          background: #e8f0f2;
          padding: 1em 2em;
          border-radius: 35px;
          margin-bottom: 1em;
          font-weight: 900;
          font-size: 18px;
          line-height: 29px;
          text-align: center;
        }
      }
    }
    .icon {
      display: none;
    }
  }
`;

export default TranslateDescribe;
