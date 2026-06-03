/* eslint-disable @next/next/no-img-element */
import { Radio } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ContentProgress = () => {
  const [selectedValue, setSelectedValue] = React.useState("1");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Container>
      <div className="content">
        <div className="header">
          <h3>توضیح تولید محتوا ومراحل انجام کار</h3>
          <p>
            سایت دیلما با استفاده از نویسندگان و مترجمین حرفه‌ای و متخصص، برای
            تولید محتوا در زمینه‌های مختلف در کنار شماست. پروژه‌های خود را به ما
            بسپارید تا با کمترین هزینه، باکیفیت‌ترین محتوا را دریافت کنید. برای
            ثبت سفارش و اطلاع از هزینه‌ها کافیست روی دکمه ثبت سفارش کلیک کنید و
            مراحل زیر را طی کنید.
          </p>
        </div>
        <div className="progress">
          <label>
            <Radio
              checked={selectedValue === "1"}
              onChange={handleChange}
              value="1"
              name="radio-buttons"
              color="default"
            />

            <h4>ثبت سفارش آنلاین</h4>
            <p>
              با کلیلک بر روی دکمه ثبت سفارش وارد منوی سفارش شوید و با انتخاب
              گزینه‌های مورد نظر خود، سفارشتان را ثبت کنید.
            </p>
          </label>
          <label>
            <Radio
              checked={selectedValue === "2"}
              onChange={handleChange}
              value="2"
              name="radio-buttons"
              color="default"
            />
            <h4>انتخاب نویسنده</h4>
            <p>
              پس از ثبت سفارش، نویسنده مورد نظر خود را از میان نویسندگانی که
              سفارش شما را قبول کرده‌اند، انتخاب کنید تا کار تولید محتوا شما
              آغاز شود.
            </p>
          </label>
          <label>
            <Radio
              checked={selectedValue === "3"}
              onChange={handleChange}
              value="3"
              name="radio-buttons"
              color="default"
            />
            <h4>تحویل سفارش</h4>
            <p>
              فایل سفارش خود را از نویسنده تحویل بگیرید و بررسی‌ها و تاییدات
              نهایی را انجام دهید.
            </p>
          </label>
        </div>
      </div>
      <div className="circle">
        <svg
          width="74"
          height="149"
          viewBox="0 0 74 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.5"
            cx="-0.5"
            cy="74.5"
            r="57.5"
            stroke="#FF0000"
            strokeWidth="34"
          />
        </svg>
      </div>
      <img src="/img/landing/content/Frame.png" className="face" alt="" />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1em;
  height: 519px;
  padding: 0 2em;
  background: #e8f0f2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .content {
    max-width: 912px;
    .header {
      max-width: 689px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      h3 {
        font-weight: 100;
        font-size: 32px;
        line-height: 61px;
        color: #151618;
      }
      p {
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        color: #2f3136;
      }
    }
    .progress {
      margin-top: 4em;
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      position: relative;
      z-index: 10;
      label {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        max-width: 121px;
        text-align: center;
        h4 {
          font-weight: 700;
          font-size: 15px;
          line-height: 24px;
        }
        p {
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
        }
      }
      &::before {
        content: "";
        position: absolute;
        top: 20px;
        width: 100%;
        height: 1px;
        background-color: #c9cbd1;
      }
    }
  }
  .circle {
    position: absolute;
    left: 0;
    bottom: 20px;
  }
  .face {
    position: absolute;
    right: 0;
  }
  @media screen and (max-width: 600px) {
    height: max-content;
    padding-bottom: 2em;
    .circle,
    .face {
      display: none;
    }
    .content {
      .progress {
        justify-content: space-between;
        flex-direction: column;
        min-height: 250px;
        label {
          flex-direction: row !important;
          max-width: 100% !important;
          p {
            display: none;
          }
        }
        &::before {
          content: "";
          position: absolute;
          right: 20px;
          height: 200px;
          width: 1px;
          background-color: #c9cbd1;
        }
      }
    }
  }
  .MuiRadio-root {
    span {
      svg {
        background-color: #fff;
        border-radius: 100%;
        z-index: 1;
      }
    }
  }
  .Mui-checked {
    span {
      svg {
        background-color: #333;
        color: #333;
        border-radius: 100%;
        z-index: 1;
      }
    }
  }
`;

export default ContentProgress;
