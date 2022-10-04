import React from "react";
import styled from "styled-components";

const TranslateFingerPrint = () => {
  return (
    <Container>
      <div className="title">
        <h2>امکان اخذ مهر تاییده دادگستری</h2>
        <p>
          اسناد و مدارک پس از ترجمه رسمی و امضای مترجم، معتبر و قانونی هستند.
          اما برخی از کشورها علاوه‌بر ترجمه رسمی، به مهر دادگستری برای تاییدیه
          نیاز دارند. دیلما علاوه‌بر ترجمه رسمی مدارک و همچنین مهر و امضای مترجم
          رسمی،  مهر و تاییدیه وزات دادگستری را نیز برای اسناد شما فراهم می‌کند.
        </p>
      </div>
      <img src="/img/translate/officialTranslate/mail.png" alt="" />
    </Container>
  );
};

const Container = styled.div`
  margin: 6em 0;
  background: #35589a;
  color: #fff;
  height: 150px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
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
    .title {
      flex-direction: column;
      justify-content: center;
      gap: 1em;
      h2,
      p {
      }
      text-align: center !important;
    }
    img {
      display: none;
    }
  }
`;

export default TranslateFingerPrint;
