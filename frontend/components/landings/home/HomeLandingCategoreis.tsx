import React from "react";
import styled from "styled-components";

const HomeLandingCategoreis = () => {
  return (
    <Container>
      <h3>چه محصولی رو می خواهید ؟</h3>
      <div className="categoreis">
        <div className="cate">
          <div className="item">
            <img src="/img/landing/landings/landing4.png" alt="" />
            <p>دوره های آموزشی</p>
          </div>
          <div className="item1">
            <img src="/img/landing/landings/landing3.png" alt="" />
            <p>ابزار ها</p>
          </div>
        </div>
        <div className="cate">
          <div className="item1">
            <img src="/img/landing/landings/landing3.png" alt="" />
            <p>ابزار ها</p>
          </div>
          <div className="item">
            <img src="/img/landing/landings/landing5.png" alt="" />
            <p>مقالات آموزشی</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 5em 0;
  .categoreis {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 2em 0;

    .cate {
      display: flex;
      gap: 1em;

      .item1 {
        width: 30%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item {
        width: 70%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        position: absolute;
        top: 40%;
        right: 5%;
        font-size: 34px;
        font-weight: 900;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 568px) {
    .cate {
      flex-direction: column;
      .item1,
      .item {
        width: 100% !important;
        height: 200px;
        p {
          width: 100%;
          right: 0;
          text-align: center;
        }
      }
    }
  }
`;

export default HomeLandingCategoreis;
