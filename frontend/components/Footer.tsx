import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  color?: string;
}

const Footer: FC<Props> = ({ color }) => {
  return (
    <Container color={color} dir="rtl">
      <div className="logo">
        <h5>دیلما</h5>
        <div className="icons">
          <Image
            src="/img/icons/linkedin.svg"
            alt="logo"
            width={24}
            height={24}
          />
          <Image
            src="/img/icons/instagram.svg"
            alt="logo"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="links">
        <h5>پیوند ها</h5>
        <ul>
          <li>
            <Link href="/dashboard">
              <a>داشبورد کاربری</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>استاد فنی</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>سوالات متداول</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="support">
        <h5>پشتیبانی</h5>
        <ul>
          <li>۰۲۱ ۷۵۱۸۱۰۰۰</li>
          <li>ساعت کاری: ۹ الی ۱۶:۴۵</li>
        </ul>
      </div>
      <div className="customers">
        <h5>از مشتریان اولیه باشید!</h5>
        <div className="email">
          <input type="email" placeholder="ایمیل خودرا وارد کنید." />
          <span>ثبت</span>
        </div>
        <p>آدرس: تهران، خیابان ولیعصر، نرسیده به پارک‌وی، کوچه افق، پلاک ۲۴</p>
      </div>
    </Container>
  );
};

const Container = styled.footer<{ color?: string }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 2em;
  padding: 4em 2em;
  background-color: ${(prop) => (prop.color ? prop.color : "#f1f1f1")};
  > div {
    max-width: 220px;
    h5 {
      font-weight: 700;
      font-size: 20px;
      line-height: 31px;
      text-align: right;
      color: #000000;
      border-bottom: 4px solid #f79624;
      margin-bottom: 1em;
      line-height: 53px;
    }
    ul {
      list-style: none;
      a,
      li {
        text-decoration: none;
        color: #000;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
        margin: 1em 0;
        text-align: right;
      }
    }
  }
  .logo {
    h5 {
      font-weight: 900;
      font-size: 33px;
      line-height: 53px;
      color: #f79624;
      border-bottom: 4px solid #000;
    }
    .icons {
      margin-top: 0.5em;
      text-align: end;
    }
  }
  .customers {
    .email {
      display: flex;
      align-items: center;
      border: 0.3px solid #000000;
      border-radius: 5px;
      width: 100%;
      height: 49px;
      input {
        padding-right: 10px;
        border: none;
        outline: none;
        box-shadow: none;
        width: 100%;
        height: 100%;
        border-radius: 5px;
      }
      span {
        min-width: 65px;
        height: 49px;
        background: #333059;
        border-radius: 5px 20px 20px 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
      }
    }
    p {
      font-weight: 700;
      font-size: 15px;
      line-height: 24px;
      line-height: 32px;
      margin-top: 1em;
    }
  }
  @media screen and (max-width: 768px) {
    .links {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    .support {
      display: none;
    }
  }
  @media screen and (max-width: 460px) {
    .customers {
      display: none;
    }
  }
`;

export default Footer;
