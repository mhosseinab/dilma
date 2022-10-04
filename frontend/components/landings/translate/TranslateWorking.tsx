import React from "react";
import styled from "styled-components";

const TranslateWorking = () => {
  return (
    <Container>
      <div className="content">
        <div className="title">
          <h6>دیلما</h6>
          <h2>چطوری کار میکنه ؟</h2>
          <p>
            ما در تلاش هستیم تا با ارائه کلیه خدمات ترجمه رسمی طبق قوانین ترجمه
            رسمی کشور و در سریعترین زمان ممکن، رضایت مشترین عزیز را جلب نماییم.
            آرامش شما برای ما بسیار مهم است و تمام توان خود را به کار می‌گیریم
            تا بدون مراجعه حضوری بهترین خدمات را دریافت کنید.
          </p>
        </div>
        <div className="movie">
          <img src="/img/translate/working-bg.png" alt="" />
          <svg
            width="63"
            height="82"
            viewBox="0 0 63 82"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.3386 43.2186L4.81063 80.904C4.40906 81.1712 3.94252 81.3245 3.46071 81.3475C2.97891 81.3706 2.49987 81.2625 2.07462 81.0349C1.64937 80.8072 1.29385 80.4684 1.0459 80.0547C0.797952 79.6409 0.666875 79.1677 0.666626 78.6853V3.31464C0.666875 2.83229 0.797952 2.35903 1.0459 1.94527C1.29385 1.53152 1.64937 1.19277 2.07462 0.965093C2.49987 0.737419 2.97891 0.629351 3.46071 0.6524C3.94252 0.675448 4.40906 0.828751 4.81063 1.09598L61.3386 38.7813C61.7038 39.0248 62.0033 39.3548 62.2104 39.7418C62.4175 40.1288 62.5259 40.561 62.5259 41C62.5259 41.4389 62.4175 41.8711 62.2104 42.2582C62.0033 42.6452 61.7038 42.9751 61.3386 43.2186Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 0 0 1em 1em;
  background: #c0e4f3;
  position: relative;
  height: 368px;
  width: 1200px;
  padding: 0 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10em auto 4em auto;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4em;
    .title {
      width: 350px;
      h6 {
        font-weight: 400;
        font-size: 37px;
        line-height: 56px;
      }
      h2 {
        font-weight: 900;
        font-size: 37px;
        line-height: 59px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }
    }
    .movie {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        position: absolute;
        z-index: 1000;
        width: 40px;
      }
      img {
        width: 450px;
        height: 200px;
        border-radius: 17px;
      }
    }
  }
  .icon {
    position: absolute;
    right: 0;
    top: 4em;
    z-index: 1;
  }
  @media screen and (max-width: 1300px) {
    .icon {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
      width: 100vw!important;
      
  }
  @media screen and (max-width: 1024px) {
    background: transparent;
    margin: 12em 0 8em 0;
    .circle {
      display: none;
    }
    .content {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      .title {
        text-align: center;
      }
      .movie {
        background: #c0e4f3;
        padding: 1em 0;
        width: 100%;
        img {
          max-width: 370px;
        }
      }
    }
    .movie {
      padding: 0 2em;
      img {
        width: 100% !important;
        border-radius: 17px;
      }
    }
  }
`;

export default TranslateWorking;
