import React from "react";
import AliceCarousel from "react-alice-carousel";
import styled from "styled-components";

const translateQualities = [
  { percentage: "% ۹۵", title: "رضایت از پشتیبانی" },
  { percentage: "% ۳۵", title: "رضایت از زمان تحویل" },
  { percentage: " % ۷۵", title: "رضایت از کیفیت ترجمه" },
]

const items = translateQualities.map((item, index) => (
  <div style={{ width: 300 }} key={index} className="item progress" data-value={index + 1}>
    <div className="barOverflow">
      <div className={`bar bar-${index + 1}`}></div>
    </div>
    <span>{item.percentage}</span>
    <h3>{item.title}</h3>
  </div>
));

const TranslateQuality = () => {

  return (
    <Container>
      <div className="bg" />
      <AliceCarousel
        mouseTracking
        autoWidth
        disableButtonsControls
        disableDotsControls
        items={items}
      />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: #ff683b;
  font-weight: 800;
  font-size: 30px;
  margin: 4em 0;
  .bg {
    background: #e2e9eb;
    width: 100%;
    height: 140px;
    position: absolute;
    z-index: -1;
    right: 0;
    top: -10px;
  }
  .progress {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 4em; */
  }
  .barOverflow {
    position: relative;
    width: 180px;
    height: 90px; /* Half circle (overflow) */
    margin-bottom: -32px;
    overflow: hidden;
    span {
      position: absolute;
      top: -100px;
    }
  }
  .bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    height: 180px; /* full circle! */
    border-radius: 50%;
    box-sizing: border-box;
    border: 22px solid #ffffff;
    border-bottom-color: #305c7e; /* half azure */
    border-left-color: #305c7e;
  }
  .bar-1 {
    transform: rotate(120deg);
  }
  .bar-2 {
    transform: rotate(35deg);
  }
  .bar-3 {
    transform: rotate(70deg);
  }
  h3 {

    margin-top: 5em;
    background: #ff683b;
    color: #ffffff;
    font-weight: 900;
    font-size: 16px;
    line-height: 26px;
    padding: 0.5em 1em;
    border-radius: 35px;
    bottom: -5em;
    min-width: 187px;
  }
  .alice-carousel__stage {
    display: flex;
    li {
      margin: auto;
    }
  }
`;

export default TranslateQuality;
