import React from "react";
import styled from "styled-components";

const TranslateHeadMobile = () => {
  return (
    <Container>
      <div className="img">
        <img
          className="head"
          src="/img/translate/officialTranslate/head-mb.png"
          alt=""
        />
        <div
          className="face"
          style={{
            backgroundImage:
              'url("/img/translate/officialTranslate/face-bg-mb.png")',
            width: 94,
            height: 89,
          }}
        >
          <img
            src="/img/translate/officialTranslate/face.png"
            className=""
            alt=""
          />
        </div>
      </div>
      <div className="content">
        <h4>ترجمه رسمی</h4>
        <h2>در سریع‌ترین حالت!</h2>
        <p>
          با استفاده از خدمات دیلما یکبار برای همیشه از سختی ترجمه‌ها رها شوید.
        </p>
        <div className="actions">
          <div className="action">
            <h4>نیاز به ترجمه چه سندی دارید؟</h4>
            <span>
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
          </div>
          <p>
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.222656 14.0713H13.5532V15.5525H0.222656V14.0713ZM7.62851 6.66542H12.8126L6.88793 12.5901L0.963242 6.66542H6.14734V0.740723H7.62851V6.66542Z"
                fill="black"
              />
            </svg>
            دانلود نرخنامه ترجمه رسمی
          </p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 3em 0;
  .img {
    background: #ff683b;
    border-radius: 35px;
    margin: 2em 2em;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    img {
      margin-bottom: -27px;
    }
    .face {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -30px;
      right: 0px;
    }
  }
  .content {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0em;
    text-align: right;
    margin: 0 2em;
    h4 {
      font-size: 37px;
      line-height: 56px;
      font-weight: 400;
      margin-right: 0.4em;
    }
    h2 {
      font-weight: 900;
      font-size: 37px;
      line-height: 59px;
      margin-right: 0.4em;
    }
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      max-width: 313px;
      margin: 1em 0;
    }
  }
  .actions {
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    .action {
      display: flex;
      align-items: center;
      gap: 2em;
      h4 {
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        color: #ff683b;
        max-width: 313px;
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 0 1em;
        border-radius: 3px;
        box-shadow: 0px 22px 217px rgba(0, 0, 0, 0.13),
          0px 11.0107px 108.606px rgba(0, 0, 0, 0.0435433),
          0px 6.63236px 65.4192px rgba(0, 0, 0, 0.0306872),
          0px 4.25036px 41.924px rgba(0, 0, 0, 0.028355),
          0px 2.75474px 27.1718px rgba(0, 0, 0, 0.0301503),
          0px 1.73408px 17.1043px rgba(0, 0, 0, 0.0329746),
          0px 0.996336px 9.8275px rgba(0, 0, 0, 0.0341041),
          0px 0.438513px 4.32534px rgba(0, 0, 0, 0.0291046);
      }
      span {
        width: 50px;
        height: 50px;
        background-color: #fff;
        box-shadow: 0px 22px 217px rgba(0, 0, 0, 0.13),
          0px 11.0107px 108.606px rgba(0, 0, 0, 0.0435433),
          0px 6.63236px 65.4192px rgba(0, 0, 0, 0.0306872),
          0px 4.25036px 41.924px rgba(0, 0, 0, 0.028355),
          0px 2.75474px 27.1718px rgba(0, 0, 0, 0.0301503),
          0px 1.73408px 17.1043px rgba(0, 0, 0, 0.0329746),
          0px 0.996336px 9.8275px rgba(0, 0, 0, 0.0341041),
          0px 0.438513px 4.32534px rgba(0, 0, 0, 0.0291046);
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
      margin-top: 1em;
    }
  }
`;

export default TranslateHeadMobile;
