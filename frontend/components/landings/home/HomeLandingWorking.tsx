import React from "react";
import styled from "styled-components";

const HomeLandingWorking = () => {
  return (
    <Container>
      <div className="dec">
        <h2>چجوری کار میکنه ؟</h2>
        <p>
          دیلما با استفاده از مترجمین و متخصصین با تجربه، مشکل ترجمه متون تخصصی
          را برای همیشه برطرف کرده است. ما با ارائه خدمات باکیفیت و مطمئن در
          تمامی حوزه‌های ترجمه و تولید محتوا، و همچنین پشتیبانی دائمی، بستری را
          برای شما فراهم کرده‌ایم تا با خیالی راحت سفارشتان را به مترجمین دیلما
          بسپارید.
        </p>
      </div>
      <div className="img__container">
        <img src="/img/landing/landings/landing2.png" alt="" />
        <img
          className="icon"
          src="/img/icons/play.svg"
          alt=""
          width={61}
          height={80}
        />
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 7em 4em;
  flex: 4;
  gap: 2em;
  > div {
    height: 400px;
  }
  .dec {
    flex: 1.5;
  }
  .img__container {
    flex: 2.5;
    position: relative;
    .icon {
      position: absolute;
      top: calc(50% - 30px);
      right: calc(50% - 30px);
      width: 30px;
      height: 30px;
    }
    img {
      position: absolute;
      height: max-content;
      width: 100%;
      top: 0;
      left: 0;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    margin: 2em 0;
    .img__container {
      .icon {
        top: calc(50% - 30px);
        right: calc(50% - 30px);
        width: 30px;
      }
      img {
        position: relative;
      }
    }
  }
`;

export default HomeLandingWorking;
