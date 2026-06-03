import React from "react";
import styled from "styled-components";

const ContentFeatures = () => {
  return (
    <Container
      style={{ backgroundImage: 'url("/img/landing/content/options_bg.png")' }}
    >
      <div className="title">
        <img src="/img/landing/content/star.svg" alt="" />
        <h3>ویژگی‌های ما</h3>
        <p>
          ما تمام سعی خود را میکنیم تا بهترین خدمات را به مشتریان ارائه دهیم.
        </p>
        <a href="#">مشاهده بیشتر</a>
      </div>
      <div className="content">
        {features.map((item, index) => (
          <div key={index} className={`item item-${index + 1}`}>
            <h4>{item.title}</h4>
            <p>{item.dec}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 584px;
  display: flex;
  align-items: center;
  padding: 0 4em;
  margin-top: 2em;
  color: #fff;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    background-color: rgba(0,0,0,0.4);
  }
  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2em;
    max-width: 352px;
    min-width: 352px;
    z-index: 10;
    h3 {
      font-weight: 400;
      font-size: 40px;
      line-height: 61px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
    }
    a {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      width: 129px;
      height: 56px;
      background: #ffffff;
      border-radius: 4px;
      text-decoration: none;
      color: #000;
    }
  }
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
    z-index: 10;

    p {
      opacity: 0.8;
    }
  }
  @media screen and (max-width: 1024px) {
    .title {
      display: none;
    }
  }
  @media screen and (max-width: 668px) {
    padding: 0 0;
    flex-direction: column;
    .title {
      display: flex;
      align-items: center;
      padding: 2em 0;

      a,
      p {
        display: none;
      }
    }
    .content {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      width: 100%;
      position: relative;
      padding: 0;
      h4 {
        width: 100%;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          width: 26px;
          height: 17px;
          background-color: #fff;
        }
        &::after {
          content: "";
          position: absolute;
          right: 0;
          width: 26px;
          height: 17px;
          background-color: #fff;
        }
      }
      p {
        display: none;
      }
    }
  }
`;

const features = [
  {
    title: "ارائه محتوای سئو شده و بدون کپی",
    dec: "ما در سایت دیلما تضمین می‌دهیم که تمامی محتواها را به ‌صورت سئو شده به مشتری تحویل دهیم و هیچ گونه کپی برداری توسط متخصصین ما انجام نمی‌شود.",
  },
  {
    title: "خوش قولی و تحویل به موقع محتوا",
    dec: "ما تضمین می‌دهیم تا برای رفاه حال مشتریان و جلب رضایت آن‌ها، در سریع‌ترین زمان محتواهای با کیفیت را ارائه دهیم.",
  },
  {
    title: "گزارش مرحله به مرحله روند تولید محتوا به کارفرما",
    dec: "ما در سایت دیلما به منظور بالا بردن کیفیت محتوا و رضایت مشتری، تمام مراحل انجام کار را به صورت بخش به بخش به کارفرما ارائه می‌دهیم.",
  },
  {
    title: " پشتیبانی آنلاین 24 ساعته",
    dec: "سایت دیلما با پشتیبانی 24 ساعته آماده پاسخگویی و رفع مشکلات مشتریان است و می‌توانید در هر ساعت از شبانه روز از طریق واتس‌اپ و یا با استفاده از شماره‌ تلفن‌های درج شده در سایت با ما در ارتباط باشید.",
  },
];

export default ContentFeatures;
