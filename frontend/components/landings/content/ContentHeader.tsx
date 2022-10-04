/* eslint-disable @next/next/no-img-element */
import { Checkbox } from "@mui/material";
import React from "react";
import styled from "styled-components";
import WhiteDropDown from "../UI/WhiteDropDown";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ContentHeader = () => {
  const [doc , setDoc] = React.useState("")

  return (
    <Container>
      <img
        className="bg"
        src="/img/landing/content/content-head-bg.png"
        alt=""
      />
      <div className="content">
        <h2>
          تولید محتوا
          <strong>در سریع‌ترین حالت!</strong>
        </h2>
        <div className="actions">
          {/* <button className="create">نیاز به چیز جدیدی دارید ؟</button> */}
          <WhiteDropDown
                  items={["مدرک تحصیلی", "شناسنامه"]}
                  setValue={setDoc}
                  value={doc}
                  placeholder="true"
                  title="نیاز به چیز جدیدی دارید ؟"
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
      <img className="circle" src="/img/landing/content/circle.png" alt="" />
    </Container>
  );
};

const Container = styled.div`
  height: 535px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .bg {
    position: absolute;
    height: 100%;
    z-index: -1;
    width: 100%;
  }
  .content {
    min-width: 562px;
    h2 {
      font-weight: 400;
      display: flex;
      flex-direction: column;
      font-size: 37px;
      color: #fff;
    }
  }
  .actions {
    background: #fff;
    border-radius: 17px;
    padding: 1.5em;
    margin-left: 0.5em;
    margin-top: 2em;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 1em;
    position: relative;
    * {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
    .create {
      background: #9b9b9b;
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
    }
  }
  .circle {
    position: absolute;
    top: -40px;
    right: -10px;
  }
  @media screen and (max-width: 618px) {
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: #000 !important;
      font-weight: 400;
      font-size: 30px;
      margin-right: 1em;
      strong {
        font-weight: 900;
      }
    }
    .content {
      width: 100% !important;
      min-width: auto;
      text-align: right;
    }
    .actions {
      flex-wrap: wrap;
      margin-top: 0em;
      .submit {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .bg {
      position: relative;
      height: 229px;
    }
    .circle {
      top: 20px;
      right: -30px;
      width: 93px;
      height: 90px;
    }
  }
`;

export default ContentHeader;
