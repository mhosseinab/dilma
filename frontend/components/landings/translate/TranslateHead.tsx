import Link from "next/link";
import React from "react";
import styled from "styled-components";
import WhiteDropDown from "../UI/WhiteDropDown";
import TranslateHeadMobile from "./TranslateHeadMobile";

const TranslateHead = () => {
  const [doc, setDoc] = React.useState("");
  return (
    <Container>
      <div className="mobile">
        <TranslateHeadMobile />
      </div>
      <div className="wide">
        <div className="img">
          <img
            className="head"
            src="/img/translate/officialTranslate/head.png"
            alt=""
          />
        </div>
        <div className="content">
          <h4>ترجمه رسمی</h4>
          <h2>در سریع‌ترین حالت!</h2>
          <p>
            با استفاده از خدمات دیلما یکبار برای همیشه از سختی ترجمه‌ها رها
            شوید.
          </p>
          <div className="actions">
            <div className="action">
              <div className="dropdown">
                <WhiteDropDown
                  items={["مدرک تحصیلی", "شناسنامه"]}
                  setValue={setDoc}
                  value={doc}
                  placeholder="true"
                  title="نیاز به ترجمه چه سندی دارید؟"
                  color="#ff683b"
                  bg="#fff"
                />
              </div>
              {/* <h4>نیاز به ترجمه چه سندی دارید؟</h4> */}
              <Link href={"/order"}>
                <span className="redirect">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.37189 5.55809L11.4848 5.38773L11.5128 6.72077L3.39988 6.89113L7.05017 10.3913L6.1275 11.3535L0.834446 6.27818L5.90978 0.985134L6.87203 1.9078L3.37189 5.55809Z"
                      fill="#03AB00"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <p>
              <img src="/img/icons/download.svg" alt="" />
              دانلود نرخنامه ترجمه رسمی
            </p>
          </div>
        </div>
        <div
          className="face"
          style={{
            backgroundImage:
              'url("/img/translate/officialTranslate/face-bg.png")',
            width: 162,
            height: 155,
          }}
        >
          <img
            src="/img/translate/officialTranslate/face.png"
            className=""
            alt=""
          />
        </div>
        <img
          src="/img/translate/officialTranslate/circle.png"
          className="circle"
          alt=""
        />
        <img src="/img/of-tr.png" className="logo" alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 560px;
  margin-top: 5em;
  .wide {
    height: 477px;
    background: #ff683b;
    border-radius: 35px;
    margin: 2em 7em;
    display: flex;
    align-items: center;
    position: relative;
    color: #fff;
    .img {
      width: 50%;
    }
    .head {
      width: 100%;
    }
    .content {
      width: 50%;
      h4 {
        font-size: 37px;
        line-height: 56px;
        font-weight: 400;
        text-align: right;
      }
      h2 {
        font-weight: 900;
        font-size: 37px;
        line-height: 59px;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        max-width: 313px;
      }
    }
    .actions {
      display: flex;
      flex-direction: column;
      .action {
        display: flex;
        align-items: center;
        gap: 2em;
        h4 {
          font-weight: 700;
          font-size: 15px;
          line-height: 24px;
          color: #ff683b;
          width: 313px;
          height: 50px;
          background-color: #fff;
          display: flex;
          align-items: center;
          padding: 0 1em;
          border-radius: 3px;
        }
        .redirect {
          width: 50px;
          height: 50px;
          background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 3px;
        }
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        align-items: center;
        gap: 1em;
        cursor: pointer;
      }
    }
    p {
      margin: 1em 0;
    }
    .face {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: -80px;
      right: -65px;
    }
    .circle {
      position: absolute;
      top: 20%;
      left: 0;
    }
    .logo {
      position: absolute;
      top: 25%;
      left: -100px;
    }
  }
  @media screen and (max-width: 1200px) {
    .logo,
    .circle {
      display: none;
    }
  }
  @media screen and (max-width: 1024px) {
    .wide {
      margin: 2em 1em;
      .face {
        right: 20px !important;
      }
      .content {
        padding: 1em;
      }
      .action {
        h4 {
          height: 35px !important;
        }
        span {
          width: 35px;
          height: 35px !important;
        }
      }
    }
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 668px) {
    height: 100%;
    .mobile {
      display: block;
    }
    .wide {
      display: none;
    }
  }
`;

export default TranslateHead;
