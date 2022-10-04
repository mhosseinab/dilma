/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ContentCreate = () => {
  return (
    <Container>
      <div className="img">
        <img src="/img/landing/content/create-icon.png" alt="" />
      </div>
      <p>
        تولید محتوا به صورت منظم، یکی از خدماتی است که سایت دیلما برای افرادی که
        به صورت منطم مایل هستند وبسایت و صفحات مجازی خود را به روز رسانی کنند و
        داشتن برنامه‌ای منظم برایشان جزو الویت است، ارائه می‌دهد. در این روش
        انواع محتواها و مقالات به صورت سئو شده و استاندارد و طبق جدول زمانی
        مشخص، در اختیار کارفرما قرار می‌گیرد. با استفاده از امکان تولید محتوای
        منظم، می‌توانید برنامه زمانی مشخصی برای کسب و کار خود داشته باشید و
        ازهمه مهمتر به دلیل قیمت مقرون‌به‌صرفه‌تر، نگرانی بابت هزینه‌های خود
        نداشته باشید. برای تولید محتوای خود روی ما حساب کنید!{" "}
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 0 3em;
  margin-bottom: 2em;
  .img {
    width: 316px;
    height: 218px;
  }
  p {
    max-width: 871px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default ContentCreate;
