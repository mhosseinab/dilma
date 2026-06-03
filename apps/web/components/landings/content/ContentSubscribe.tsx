import Image from "next/image";
import React from "react";
import styled from "styled-components";

const ContentSubscribe = () => {
  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="item">
          <Image src={item.icon} width={65} height={65} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.dec}</p>
          <span>{item.price}</span>
          <a href="#">خرید</a>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2em;
  min-height: 485px;
  background: #e2e9eb;
  margin-top: 4em;
  padding: 0 2em;
  .item {
    max-width: 323px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    text-align: center;
    a {
      background: #1972cb;
      border-radius: 4px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 14px 4em;
      color: #fff;
      text-decoration: none;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4em 2em !important;
    .item {
      p {
        display: none;
      }
    }
  }
`;

export default ContentSubscribe;

const items = [
  {
    title: "پایه",
    dec: "یک قاب وب‌سایت، که به‌عنوان شماتیک صفحه یا طرح صفحه نیز شناخته می‌شود، یک راهنمای تصویری است که نمایانگر اسکلت است.",
    icon: "/img/landing/content/Icon.svg",
    price: "۶۰۰ هزار تومان (ماهیانه)",
  },
  {
    title: "پیشرفته",
    dec: "یک قاب وب‌سایت، که به‌عنوان شماتیک صفحه یا طرح صفحه نیز شناخته می‌شود، یک راهنمای تصویری است که نمایانگر اسکلت است.",
    icon: "/img/landing/content/Icon-1.svg",
    price: "۹۰۰ هزار تومان (ماهیانه)",
  },
  {
    title: "حرفه‌ای",
    dec: "یک قاب وب‌سایت، که به‌عنوان شماتیک صفحه یا طرح صفحه نیز شناخته می‌شود، یک راهنمای تصویری است که نمایانگر اسکلت است.",
    icon: "/img/landing/content/Icon-2.svg",
    price: "۱٬۲۰۰ هزار تومان (ماهیانه)",
  },
];
