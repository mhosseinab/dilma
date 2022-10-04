import { Checkbox } from "@mui/material";
import React from "react";
import styled from "styled-components";
import WhiteDropDown from "../UI/WhiteDropDown";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TranslateHead = () => {
  const [doc , setDoc] = React.useState("")
  return (
    <Container>
      <div className="box-container">
        <div className="box">
          <img src="/img/translate/head.png" alt="" />
        </div>
      </div>
      <div className="details">
        <h1>
          ترجمه ویدیو <strong>و زیرنویس</strong>
        </h1>
        <p className="dec">
          ترجمه زیرنویس و فایل صوتی یکی از کارهای تخصصی است که انجام آن دردسرها
          و مشکلات خود را دارد، به راحتی امکان‌پذیر نیست و نیازمند یک متخصص
          حرفه‌ای با سرعت بالاست. سایت دیلما انواع ترجمه‌های تخصصی ویدئو،
          فایل‌های صوتی و فیلم و سریال را با بهترین کیفیت، در سریعترین زمان و با
          پیشرفته‌ترین ابزارها توسط مترجمین متبحر و با تجربه انجام میدهد.
        </p>
        <div className="actions">
          {/* <button>نیاز به چیز جدیدی دارید ؟</button> */}
          <WhiteDropDown
                  items={["مدرک تحصیلی", "شناسنامه"]}
                  setValue={setDoc}
                  value={doc}
                  placeholder="true"
                  title="نیاز به ترجمه چه سندی دارید؟"
                  color="#fff"
                  bg="#416168"
                  width={250}
                  height="small"
                />
          <p>
            نیاز به مشاوره دارید؟
            <Checkbox {...label} defaultChecked color="default" />
          </p>
          <button className="submit">
            ثبت درخواست
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.37189 5.55809L11.4848 5.38773L11.5128 6.72077L3.39988 6.89113L7.05017 10.3913L6.1275 11.3535L0.834446 6.27818L5.90978 0.985134L6.87203 1.9078L3.37189 5.55809Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  /* margin-top: 80px; */
  max-height: 80vh;
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    gap: 1em;
    h1 {
      font-weight: 400;
      strong {
        font-weight: 900;
      }
    }
    .dec {
      color: #2f3136;
      max-width: 513px;
      padding-left: 2em;
    }
    .actions {
      background: #cccccc;
      border-radius: 17px;
      padding: 1.5em;
      margin-left: 0.5em;
      margin-top: 2em;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      max-width: 562px;
      width: 90%;
      flex-wrap: wrap;
      gap: 1em;
      position: relative;
      * {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
      button {
        background: #416168;
        border-radius: 3px;
        color: #fff;
        padding: 0.5em 1em;
      }
      .submit {
        background: #03ab00;
        display: flex;
        align-items: center;
        gap: 1em;
        position: absolute;
        left: -30px;
      }
    }
  }
  .box-container {
    background: #c0e4f3;
    border-radius: 0px;
    width: 522px;
    height: 80vh;
    display: flex;
    .box {
      margin-top: 168px;
      background: #416168;
      border-radius: 0px;
      width: 490px;
      height: 418px;
      margin-right: 5em;
      img {
        margin-top: 3em;
        margin-right: 3em;
      }
    }
  }
  @media screen and (max-width: 1124px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3em !important;
    .box-container {
      background-color: transparent;
      width: fit-content;
      height: fit-content;
      .box {
        margin-right: 0;
        margin-top: 1em;
        img {
        }
      }
    }
    .details {
      margin: 2em 0 0 0;
    }
  }
  @media screen and (max-width: 668px) {
    .details {
      h1 {
        padding: 0 0.5em;
        font-size: 24px;
      }
      .dec {
        font-size: 14px;
        padding: 0 1em;
      }
    }
    .actions {
      flex-wrap: wrap;
      margin: 1em;
      background-color: transparent !important;
      button {
        padding: 0.2em 0.4em !important;
      }
      .submit {
        position: relative !important;
        left: 0 !important;
        width: 100%;
        padding: 1em !important;
        justify-content: center;
      }
    }
    .box-container {
      .box {
        width: 267px;
        height: 227px;
        img {
          width: 251px;
          height: 236px;
        }
      }
    }
  }
`;

export default TranslateHead;
