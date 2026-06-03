import React from "react";
import styled from "styled-components";
import flags from "lib/flags.json";

const TranslateLanguages = () => {
  return (
    <Container>
      <div className="img">
        <img
          className="head"
          src="/img/translate/officialTranslate/nomad.png"
          alt=""
        />
      </div>
      <div className="content">
        <h4>زبان‌هایی که</h4>
        <h2>ترجمه رسمی براشون انجام میدیم؟</h2>
        <div className="flags">
          {flags.map((item, index) => (
            <div className="flag" key={index}>
              <img src={item.icon} alt="" width={20} height={15} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: fit-content;
  background: #35589a;
  border-radius: 35px;
  margin: 2em 2em;
  display: flex;
  align-items: flex-end;
  gap: 4em;
  padding: 3em 2em 0 2em;
  color: #fff;
  .img {
    position: relative;
    width: 50%;
    height: 100%;
    max-width: 604px;
    max-height: 443px;
  }
  .head {
    width: 100%;
    margin-bottom: -10px;
  }
  .content {
    width: 50%;
    align-self: center;
    h4 {
      font-weight: 400;
      font-size: 26px;
    }
    h2 {
      font-weight: 900;
      font-size: 38px;
      text-align: right;
    }
  }
  .flags {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2em;
    gap: 2em;
    .flag {
      display: flex;
      align-items: center;
      gap: 0.5em;
      width: 148px;
    }
  }
  @media screen and (max-width: 1200px) {
    .content {
      h4 {
        font-size: 24px;
      }
      h2 {
        font-size: 32px;
      }
    }
  }
  @media screen and (max-width: 1042px) {
    margin: 2em 1em;
    .content {
      h4 {
        font-size: 21px;
      }
      h2 {
        font-size: 26px;
      }
    }
  .flags {
  gap: 1em;
  .flag {
    font-size: 14px;
  }
  }
  }
  @media screen and (max-width: 880px) {
    background-color: transparent;
    flex-direction: column;

    margin: 2em 0;
    padding: 0 0.5em;
    .img {
      background: #35589a;
      width: 100%;
      max-width:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 2em 1em 0 1em;
      img {
        max-width: 375px;
        margin-bottom: 0px;
      }
    }
    .content {
      width: 100%;
      h4 {
        padding-right: 1em;
        font-size: 20px;
      }
      h2 {
        font-size: 25px;
        padding-right: 1em;
      }
      * {
        color: #000;
      }
    }
    .flags {
      place-items: center;

    }
  }
  @media screen and (max-width: 468px) {
    .flags {
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content:center;
.flag {
  font-size: 12px;
  width: 120px;
} 
    }
  }
`;

export default TranslateLanguages;
