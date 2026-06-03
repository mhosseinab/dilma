/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const WideMenu = () => {
  const [show, setShow] = React.useState(false);

  const router = useRouter();

  return (
    <Container onMouseLeave={() => setShow(false)}>
      <div className="menu__container items">
        <Link href={"/"} passHref>
          <a className="menuItem" >خانه</a>
        </Link>
        <div
          onMouseEnter={() => setShow(true)}
          // onClick={() => setShow(!show)}
          className="dropdown menuItem"
        >
          <a className="title" style={{ userSelect: "none" }}>
            خدمات
            <img
              className={`${show && "openMenu"}`}
              src="/img/icons/chevron.svg"
              width={21}
              height={12}
              alt=""
            />
          </a>
          <ul className={`${show && "active"}`}>
            <li>
              <Link href="/translate">
                <a>ترجمه رسمی</a>
              </Link>
            </li>
            <li>
              <Link href="/content">
                <a>تولید محتوا</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>چاپ کتاب</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>اعزام مترجم</a>
              </Link>
            </li>
            <li>
              <Link href="/translate/video">
                <a>ترجمه فیلم و محتوا</a>
              </Link>
            </li>
          </ul>
        </div>

        <Link href={"/"} passHref>
          <a className="menuItem" >سرویس های ما</a>
        </Link>
        <Link href={"/"} passHref>
          <a className="menuItem" >پشتیبانی</a>
        </Link>
      </div>
      <div className="menu__container actions">
        <button onClick={() => router.push("/login")}>ثبت نام / ورود</button>
        <span className="logo">دیلما</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  .menu__container {
    display: flex;
    align-items: center;
  }
  .items {
    justify-content: space-between;
    max-width: 500px;
    width: 100%;
    a {
      text-decoration: none;
      color: #000;
    }
  }
  .menuItem {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .actions {
    button {
      background: #305c7e;
      border-radius: 3px;
      height: 40px;
      padding: 0 2em;
      color: #fff;
      margin-left: 16px;
    }
    .logo {
      font-size: 26px;
      line-height: 53px;
      color: #f79624;
      font-weight: 900;
      border-bottom: 8px solid #305c7e;
    }
  }
  .dropdown {
    position: relative;
    height: 100%;
    .title {
      display: flex;
      align-items: center;
      img {
        transform: rotate(270deg);
      }
    }
    ul {
      display: none;
      list-style: none;
      position: absolute;
      width: 156px;
      min-height: 150px;
      flex-direction: column;
      background: #f1f1f1;
      border: 1px solid #000000;
      box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
      border-radius: 3px;
      z-index: 10000;
      top: 3em;
      li {
        padding: 0.5em 0.3em;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .active {
    display: flex !important;
  }
  .openMenu {
    transform: rotate(90deg) !important;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .items {
      margin-top: 1em;
    }
    .actions {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default WideMenu;
