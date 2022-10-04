import React from "react";
import styled from "styled-components";

const TranslateChart = () => {
  return (
    <Container>
      <div className="content">
        <div className="chart item-1">
          <div className="item">
            <img src="/img/translate/chart/Vector-2.svg" alt="" />
          </div>
          <h4>+2500</h4>
          <p>پروژه های انجام شده</p>
        </div>
        <div className="chart item-2">
          <div className="item">
            <img src="/img/translate/chart/Vector.svg" alt="" />
          </div>
          <h4>+2500</h4>
          <p>مشتریان ما</p>
        </div>
        <div className="chart  item-3">
          <div className="item">
            <img src="/img/translate/chart/Vector-1.svg" alt="" />
          </div>
          <h4>+2500</h4>
          <p>مترجم</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 5em auto 5em auto;
  background: #f8f8f8;
  padding: 3em 0;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px;
    gap: 1em;
    margin: auto;
  }
  .chart {
    text-align: center;
  }
  .item {
    width: 183px;
    height: 183px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1em solid #ffca41;
    margin-bottom: 1em;
  }
  @media screen and (max-width: 648px) {
    .item-3 {
      display: none;
    }
  }
  @media screen and (max-width: 400px) {
    .item {
      width: 143px;
      height: 143px;
    }
    .item-3 {
      display: none;
    }
  }
`;

export default TranslateChart;
