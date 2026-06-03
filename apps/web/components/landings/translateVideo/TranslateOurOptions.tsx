/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

import translateOptions from "lib/translateOptions.json";
import TranslateOurOptionsMobile from "./TranslateOurOptionsMobile";

const TranslateOurOptions = () => {
  const [currentOption, setCurrentOption] = React.useState(translateOptions[0]);
  return (
    <Container>
      <div className="mobile">
        <TranslateOurOptionsMobile />
      </div>
      <div
        className="desktop"
        style={{ backgroundImage: 'url("/img/translate/whiteBg.png")' }}
      >
        <div className="title">
          <h1>ویژگی های ما</h1>
          <p>
            ما تمام سعی خود را میکنیم تا بهترین خدمات را به مشتریان ارائه دهیم.
          </p>
        </div>
        <div className="wide">
          <div className="options">
            {translateOptions.map((item, index) => (
              <div
                className={`option ${item.id === currentOption.id && "active"}`}
                onClick={() => setCurrentOption(item)}
                key={index}
              >
                <div className="icon">
                  <img src={item.icon} alt="" />
                </div>
                <h5>{item.title}</h5>
              </div>
            ))}
          </div>
          <div className="detail">
            <img width={550} height={350} src={currentOption.img} alt="" />
            <p>{currentOption.dec}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  .desktop {
    height: max-content;
    padding-bottom: 4em;
    width: 100%;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    .title {
      width: 100%;
      text-align: center;
      margin: 3em auto;
      max-width: 352px;
      padding: 4em 0 0 0;
      p {
        font-weight: 300;
        font-size: 16px;
        line-height: 28px;
      }
    }
    .wide {
      margin: 0 4em;
      display: flex;
      justify-content: center;
      gap: 1em;
      .options {
        display: flex;
        flex-direction: column;
        gap: 1em;
        .option {
          display: flex;
          gap: 1em;
          align-items: center;
          border-radius: 8px;
          border: 1px solid #c9cbd1;
          width: 350px;
          height: 150px;
          padding: 1em;
          cursor: pointer;
          .icon {
            background: #c9cbd1;
            border-radius: 8px;
            min-width: 80px !important;
            min-height: 80px !important;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .active {
          border: 2px solid #151618 !important;
          .icon {
            background: #ffd692;
          }
        }
      }
      .detail {
        p {
          margin: 0 auto;
          padding: 4em 0;
          max-width: 350px;
          font-weight: 300;
          font-size: 16px;
          line-height: 28px;
          text-align: center;
        }
      }
    }
    .bg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .mobile {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    .bg {
      display: none;
    }
    background-color: #ededed;
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }
`;
export default TranslateOurOptions;
