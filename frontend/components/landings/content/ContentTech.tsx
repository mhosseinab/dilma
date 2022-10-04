/* eslint-disable @next/next/no-img-element */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import techs from "lib/contentTech.json";
import styled from "styled-components";

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  768: { items: 3 },
};

const items = techs.content.map((item, index) => (
  <div style={{ width: 350 }} className="item" key={index}>
    <div className="content">
      <img src={item.img} alt="" />
      <div className="details_actions">
        <div className="details">
          <span>{item.date}</span>
          <h4>{item.title}</h4>
        </div>
        <div className="actions">
          <span>
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.375 18.75L1.625 10L10.375 1.25"
                stroke="#FF1212"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            ادامه مطالب
          </span>
          <img
            src="/img/landing/content/share.svg"
            width={20}
            height={20}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
));

const ContentTech = () => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const slidePrev = () => setCurrentPage(currentPage - 1);
  const slideNext = () => setCurrentPage(currentPage + 1);
  const syncActiveIndex = ({ item }: any) => setCurrentPage(item);
  return (
    <Container>
      <div className="title">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={slideNext}
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M20.5 17L27.5 24L20.5 31"
            stroke="#130F26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2>ویدیو های آموزشی</h2>
        <svg
          onClick={slidePrev}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
            fill="white"
          />
          <path
            d="M27.5 31L20.5 24L27.5 17"
            stroke="#130F26"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="card">
        <div className="details_actions">
          <div className="details">
            <span>{techs.head[0]?.date}</span>
            <h4>{techs.head[0]?.title}</h4>
            <p>{techs.head[0]?.dec}</p>
          </div>
          <div className="actions">
            <img
              src="/img/landing/content/share.svg"
              width={20}
              height={20}
              alt=""
            />
            <span>ادامه مطالب</span>
          </div>
        </div>
        <div className="img">
          <img src={techs.head[0]?.img} alt="" />
        </div>
      </div>
      <AliceCarousel
        mouseTracking
        items={items}
        activeIndex={currentPage}
        onSlideChanged={syncActiveIndex}
        autoWidth
        disableButtonsControls
        autoPlay={false}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 6em 2em;
  max-width: 1204px;
  margin: auto;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 0;
    svg {
      cursor: pointer;
    }
  }
  .card {
    display: flex;
    margin-bottom: 2em;
    min-height: fit-content;
    width: 100%;
    .img {
      width: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .details_actions {
      width: 50%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      .details {
        text-align: right;
        display: flex;
        flex-direction: column;
        gap: 1em;
        max-width: 440px;
        padding: 1em 0.5em 1em 3em;
      }
      .actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em 2em;
        * {
          cursor: pointer;
        }
      }
    }
    background: #ffffff;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
      0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
      0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
      0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
      0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
      0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
    border-radius: 0px 8px 8px 0px;
  }
  .item {
    user-select: none;
    overflow: hidden;
    text-align: right;
    .content {
      margin: 0 0 !important;
      width: 300px;
      img {
        width: 100%;
      }
      .details_actions {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 200px;

        .actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          * {
            cursor: pointer;
          }
          img {
            width: 20px;
            height: 20px;
          }
          span {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }
      }
    }
  }
  .alice-carousel__stage {
    cursor: move;
    /* display: flex; */
    li {
      /* margin: 0 auto !important; */
    }
  }
  @media screen and (max-width: 768px) {
    .card {
      display: none;
    }
  }
`;

export default ContentTech;
