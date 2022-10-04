import Link from "next/link";
import React from "react";
import styled from "styled-components";

const HomeLandingHeader = () => {
  return (
    <Container>
      <div className="content">
        <h1>
          تمامی خدمات <span>ترجمه</span>،<strong>در یکجا</strong>
        </h1>
        <div className="details">
          <p>
            با استفاده از خدمات دیلما یکبار برای همیشه از سختی ترجمه‌ها رها
            شوید.
          </p>
          <div className="action">
            <p>اولین استفاده رایگان!</p>
            <Link href={"/order"} passHref>
              <button>دیلماچ!</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="img__container">
        <img src="/img/landing/landings/landing.png" alt="" />
      </div>
      <div className="details-mobile">
        <p>
          با استفاده از خدمات دیلما یکبار برای همیشه از سختی ترجمه‌ها رها شوید.
        </p>
        <div className="action">
          <p>اولین استفاده رایگان!</p>
          <Link href={"/order"} passHref>
            <button>دیلماچ!</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.header`
  padding: 5em 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .content {
    width: 30%;
    h1 {
      font-weight: 400;
      font-size: 44px;
      line-height: 77px;
      span {
        color: #f79624;
      }
      strong {
        font-weight: 900;
      }
    }
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: right;
    color: #000000;
    margin: 1em 0 !important;
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    button {
      background: #305c7e;
      /* Ligh shadow */
      box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      color: #fff;
      padding: 0.5em 2em;
    }
  }
  .img__container {
    width: 70%;
    min-height: 400px;
    position: relative;
    img {
      width: fit-content;
      max-width: 100%;
      height: fit-content;
      position: absolute;
    }
  }
  .details-mobile {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    .content,
    .img__container,
    .action {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .img__container {
      min-height: 400px;
    }
    .details {
      display: none;
    }
    .details-mobile {
      display: block;
    }
  }
  @media screen and (max-width: 550px) {
    .img__container {
      width: 273px;
      height: 182px;
      min-height: fit-content;
      img {
        width: 273px;
        height: 182px;
      }
    }
  }
`;

export default HomeLandingHeader;
