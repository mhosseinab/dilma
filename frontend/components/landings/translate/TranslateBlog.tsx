import React from "react";
import styled from "styled-components";

import homeBlog from "lib/homeBlog.json";

const TranslateBlog = () => {
  return (
    <Container>
      <div className="title">
        <h3>وبلاگ دیلما</h3>
        <a className="btn">مطالعه بیشتر</a>
      </div>
      <div className="cards">
        {homeBlog.map((item, index) => (
          <div key={index} className={`card ${"item" + (index + 1)}`}>
            <img src={item.img} alt="" />
            <div className="details">
              <h4>{item.title}</h4>
              <span>{item.date}</span>
              <p>{item.dec}</p>
            </div>
          </div>
        ))}
      </div>
      <a className="btn btn-mobile">مطالعه بیشتر</a>
      <div className="bg"></div>
    </Container>
  );
};

const Container = styled.div`
  margin: 3em 0em;
  padding: 0 2em;
  position: relative;
  overflow: hidden;
  .bg {
    position: absolute;
    width: 100%;
    margin-top: 10%;
    height: 100%;
    top: 0;
    left: 0;
    background: #305c7e;
    z-index: -1;
  }
  color: #fff;
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 2em 0;
      .details {
        padding: 2em;
        h4 {
          font-weight: 900;
          font-size: 24px;
        }
        span {
          font-weight: 900;
        }
        p {
          font-weight: 300;
          font-size: 18px;
        }
      }

      img {
        width: 300px;
        height: 200px;
      }
    }
  }
  .btn-mobile {
    display: none;
  }
  .btn {
    background: #305c7e;
    /* Ligh shadow */

    box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    color: #fff;
    padding: 0.4em 2em;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000;
    h3 {
      font-weight: 400;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1024px) {
    .bg {
      margin-top: 15%;
    }
    .item2 {
      display: none !important;
    }
  }
  @media screen and (max-width: 668px) {
    display: flex;
    flex-direction: column;
    color: #000;
    .bg {
      display: none;
    }
    .btn {
      display: none;
    }
    .btn-mobile {
      display: inline-block;
      align-self: center;
    }
    .item3 {
      display: none !important;
    }
  }
`;

export default TranslateBlog;
