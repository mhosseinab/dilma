import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import formats from "lib/formats.json";
import styled from "styled-components";

let itemsLength = formats.video;

const items = itemsLength.map((item, index) => {
  return (
    <div
      style={{ width: 120 }}
      key={index}
      className="item format"
      data-value={index + 1}
    >
      {item}
      <div className="line" />
    </div>
  );
});
let audio = formats.audio;

const audioItems = audio.map((item, index) => {
  return (
    <div
      style={{ width: 120 }}
      key={index}
      className="item format"
      data-value={index + 1}
    >
      {item}
      <div className="line" />
    </div>
  );
});

const TranslateFormats = () => {
  const [category, setCategory] = React.useState({
    items: items,
    type: "video",
  });
  const changeCategoryHandler = (type: string) => {
    if (type === "video") {
      setCategory({ ...category, items: items, type: "video" });
    } else {
      setCategory({ ...category, items: audioItems, type: "audio" });
    }
  };
  return (
    <Container>
      <div className="actions">
        <button
          className={`${category.type === "video" && "active"}`}
          onClick={() => changeCategoryHandler("video")}
        >
          فرمت های تصویری
        </button>
        <button
          className={`${category.type === "audio" && "active"}`}
          onClick={() => changeCategoryHandler("")}
        >
          فرمت های صوتی
        </button>
      </div>
      <AliceCarousel
        autoWidth
        mouseTracking
        disableButtonsControls
        disableDotsControls
        items={category.items}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 1em 2em;
  margin: 6em 0;
  background: #e5e5e5;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  .actions {
    position: absolute;
    top: -25px;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1em;
    button {
      border-radius: 18px;
      width: 169px;
      height: 50px;
    }
  }
  .format {
    cursor: pointer;
    user-select: none;
    padding-bottom: 1em;
    margin: 2em 1em 0 2em;
    text-align: center;
  }
  .line {
    background: #c4c4c4;
    height: 7px;
    width: 90%;
  }
  .active {
    background: #416168;
    color: #fff;
  }
  .alice-carousel__stage {
    display: flex;
    li {
      margin: auto;
    }
  }
`;

export default TranslateFormats;
