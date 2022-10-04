import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  date: string;
  price: string;
  totalPrice: string;
  details: { name: string; price: string }[];
  progress?: { desc: string; percentage: string };
}

const PaymentDetails: FC<Props> = ({
  title,
  date,
  price,
  totalPrice,
  details,
  progress,
}) => {
  return (
    <Container progressPercentage={progress?.percentage}>
      <div className="header">
        <h5>{title}</h5>
        <span>{date}</span>
      </div>
      {progress && (
        <div className="project">
          <p>{progress.desc}</p>
          <div className="progress__container">
            <div className="progress">
              <div className="progress__percentage"></div>
            </div>
            <small>{progress && progress?.percentage}%</small>
          </div>
        </div>
      )}
      <div className="main">
        <h5>جزییات قیمت</h5>
        <div className="price__container">
          <div className="price">
            <span className="price__title">قیمت اصلی</span>
            <a>{price?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</a>
          </div>
          <div className="price">
            <span className="price__title">قیمت نهایی</span>
            <a>{totalPrice?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان</a>
          </div>
          <div className="price">
            <span className="price__title">نوع پرداخت</span>
            <a>آنلاین</a>
          </div>
        </div>
        <div className="details">
          {details.map((item, index) => (
            <div key={index} className="details__item">
              <h6>{item.name}</h6>
              <span>
                {item.price?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
              </span>
            </div>
          ))}
          <button className="btn">دانلود فاکتور</button>
        </div>
      </div>
      <div className="bottom">
        <div className="new-ticket">
          <h6>تیکت های این سفارش</h6>
          <Link href={"/dashboard/tickets/new"} passHref>
            <button className="btn">ارسال تیکت</button>
          </Link>
        </div>
        <div className="changes">
          <h6>درخواست تغیرات</h6>
          <span>پاسخ داده شده</span>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ progressPercentage?: string }>`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .main {
    .price__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-top: 2em;
      .price {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 42px;
        background-color: #e7e7e7;
        border-radius: 7px;
        width: 100%;
        a {
          font-weight: 400;
          font-size: 15px;
          line-height: 26px;
          text-align: right;
        }
        .price__title {
          position: absolute;
          right: 0;
          top: -1.8em;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          text-align: right;
        }
      }
    }
    .details {
      margin: 2em 0;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      .details__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        padding: 0.6em 0;
        h6 {
          opacity: 0.5;
        }
        span {
          color: #b66200;
          font-size: 14px;
        }
      }
    }
  }
  .bottom {
    .new-ticket {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .changes {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 2em;
      * {
        font-size: 14px;
        font-weight: 300;
      }
      span {
        color: #03ab00;
      }
    }
  }
  .project {
    p {
      background: #e7e7e7;
      border-radius: 5px;
      padding: 1em 2em;
      font-size: 12px;
    }
    .progress__container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 3em 0;
      .progress {
        background: rgba(247, 150, 36, 0.2);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
        border-radius: 11px;
        width: 100%;
        height: 16px;
        position: relative;
        .progress__percentage {
          position: absolute;
          top: 0;
          right: 0;
          width: ${(prop) => prop.progressPercentage}%;
          height: 100%;
          opacity: 1 !important;
          background: #ff8a00;
          box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
          border-radius: 11px;
        }
      }
    }
  }
  .btn {
    background: #305c7e;
    border-radius: 3px;
    color: #fff;
    height: 30px;
    padding: 0 1em;
    margin: 1em 0;
    align-self: flex-end;
  }
  @media screen and (max-width: 468px) {
    .price {
      a {
        font-size: 13px !important;
      }
    }
  }
`;

export default PaymentDetails;
