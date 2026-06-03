import React from "react";
import styled from "styled-components";

const TranslateHire = () => {
  return (
    <Container>
      <div className="title">
        <h2>جذب مترجم</h2>
        <p>
          اگر دانش ترجمه دارید و به دنبال یک فرصت شغلی مناسب با کسب درآمد بالا
          از طریق دورکاری هستید، همین حالا به سادگی در سایت ثبت نام کنید تا پس
          از قبولی در آزمون‌های ما، همکاری خود را با دیلما آغاز کنید. 
        </p>
      </div>
      <div className="img">
        <img src="/img/translate/officialTranslate/candidate.png" alt="" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 12em 0 4em 0;
  background: #e2e9eb;
  color: #000;
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  .img {
    display: flex;
    align-items: flex-end;
  }
  img {
    filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07))
      drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198))
      drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275))
      drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035))
      drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725))
      drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802));
  }
  .title {
    display: flex;
    align-items: center;
    align-self: center;
    gap: 2em;
    h2 {
      width: 127px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-align: right;
      max-width: 350px;
    }
  }
  @media screen and (max-width: 928px) {
    height: max-content;
    padding: 2em 0;
    margin: 4em 0;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2em;
    background: transparent;
    .img {
      background-color: #e2e9eb;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0 1em;
      img {
        width: clamp(200px, 100%, 471px);
      }
    }
    .title {
      flex-direction: column;
      justify-content: center;
      gap: 1em;
      h2,
      p {
      }
      text-align: center !important;
    }
  }
`;

export default TranslateHire;
