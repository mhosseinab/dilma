/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const ContentResource = () => {
  return (
    <Container>
      <h2>منابع</h2>
      <div className="content">
        <div className="video">
          <h4>
            <img src="/img/landing/content/video.svg" alt="" />
            ویدئو ها
          </h4>
          <p>
            در بخش ویدئو ها میتوانید از روند کاری شرکت بیشتر آگاه بشید تا
            بتوانید بهتر تصمیم بگیرید.
          </p>
          <a href="#">مشاهده ویدئو ها</a>
        </div>
        <div className="line" />
        <div className="file">
          <h4>
            <img src="/img/landing/content/file.svg" alt="" />
            فایل ها
          </h4>
          <p>
            شما در قسمت مقالات میتوانید اطلاعات بیشتری راجع به فعالیت شرکت کسب
            کنید.
          </p>
          <a href="#">خواندن مقالات</a>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-height: 488px;
  background: linear-gradient(0deg, #1972cb, #1972cb), #ffffff;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
  text-align: center;
  .content {
    padding: 2em 4em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .line {
      width: 0px;
      height: 244px;
      border: 2px solid #c9cbd1;
      border-radius: 7px;
    }
  }
  .file,
  .video {
    width: 442px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    h4 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
      font-weight: 700;
      font-size: 24px;
      line-height: 38px;
      text-align: center;
      color: #ffffff;
    }
    p {
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: #ffffff;
      padding: 0em 4em;
    }
    a {
      background: #ffffff;
      border-radius: 4px;
      text-decoration: none;
      color: #000;
      padding: 1em 3em;
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 4em;
    }
    h2,
    .line {
      display: none;
    }
  }
`;

export default ContentResource;
