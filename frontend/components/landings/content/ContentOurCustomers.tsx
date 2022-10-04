/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

import customers from "lib/contentCustomers.json";
import Image from "next/image";

const ContentOurCustomers = () => {
  const [currentItem, setCurrentItem] = React.useState(customers[0]);
  return (
    <Container>
      <h1>نظر مشتریان ما</h1>
      <div className="content">
        <div className="details">
          <img
            width={55}
            height={40}
            src="/img/landing/content/quote.png"
            alt=""
          />
          <div className="details__content">
            <p className="dec">{currentItem.dec}</p>
            <span className="name">{currentItem.name}</span>
            <span className="as">{currentItem.as}</span>
          </div>
        </div>
        <div className="grids">
          {customers.map((item) => (
            <div
              className={`grid ${
                item.id === currentItem.id ? "active " : "disable"
              }`}
              key={item.id}
              onClick={() => setCurrentItem(item)}
            >
              <div className="img">
                <Image
                  src={
                    currentItem.id === item.id
                      ? item.img
                      : "/img/landing/content/profile.svg"
                  }
                  alt=""
                  layout="fill"
                />
              </div>
              <div className="grid__details">
                <span className="name">{item.name}</span>
                <span className="as">{item.as}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 6em 0;
  text-align: center;
  .content {
    display: flex;
    justify-content: space-around;
    text-align: right;
    margin-top: 5em;
  }
  .details {
    display: flex;
    gap: 2em;
    align-items: flex-start;
    img {
      margin-top: 1em;
    }
    .details__content {
      display: flex;
      flex-direction: column;
      line-height: 35px;
    }
    .name {
      margin-top: 2em;
      color: #000;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }
    .as {
      color: #7b808c;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
    }
    .dec {
      max-width: 540px;
    }
  }
  .grids {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2em;
    .grid {
      cursor: pointer;
      width: 164px;
      height: 164px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      z-index: 10;
      .grid__details {
        position: absolute;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-direction: column;
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
      }
    }
    .active {
      background: #c9cbd1;
      border-radius: 8px;
      .grid__details {
        display: none;
      }
    }
    .disable {
      background: rgba(25, 114, 203, 0.8);
      border-radius: 8px;
      .grid__details {
        display: flex;
      }
    }
  }
  .img {
    width: 99px;
    height: 99px;
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    .content {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      gap: 4em;
      padding: 0 2em;
      .grids {
        gap: 1em;
      }
      .details {
        img {
          display: none;
        }
      }
    }
  }
`;

export default ContentOurCustomers;
