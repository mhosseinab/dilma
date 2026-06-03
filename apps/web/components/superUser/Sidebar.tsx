import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="title">
        <h2>دیلما</h2>
      </div>
      <span className="username">نام کاربری</span>
      <ul className="tables menu">
        <li
          className={`${router.asPath === "/admin/requests" && "active"}`}
        >
          <Link href={`/admin/requests`}>
            <a>درخواست هات ترجمه</a>
          </Link>
        </li>
        <li className={`${router.asPath === "/admin/wallet" && "active"}`}>
          <Link href={`/admin/wallet`}>
            <a>صورت حساب من</a>
          </Link>
        </li>
        <li
          className={`${router.asPath === "/admin/activity" && "active"}`}
        >
          <Link href={`/admin/activity`}>
            <a>فعالیت های من</a>
          </Link>
        </li>
      </ul>
      <ul className="workers menu">
        <li
          className={`${router.asPath === "/admin/new-worker" && "active"}`}
        >
          <Link href={`/admin/new-worker`}>
            <a>تعریف ترنج کار جدید</a>
          </Link>
        </li>
        <li className={`${router.asPath === "/admin/sellers" && "active"}`}>
          <Link href={`/admin/sellers`}>
            <a>لیست ترنج کارها</a>
          </Link>
        </li>
        <div className="br" />
        <li
          className={`${router.asPath === "/admin/workers-activity" && "active"}`}
        >
          <Link href={`/admin/workers-activity`}>
            <a>فعالیت ترنج کاران</a>
          </Link>
        </li>
        <li className={`${router.asPath === "/admin/payments" && "active"}`}>
          <Link href={`/admin/payments`}>
            <a>صورت حساب ها</a>
          </Link>
        </li>
      </ul>
      <Link href={`/admin/score`}>
        <a
          className={` menu-item ${
            router.asPath === "/admin/score" && "active"
          }`}
        >
          جدول برترین ها
        </a>
      </Link>
      <ul className="tables menu">
        <li className={`${router.asPath === "/admin/profile" && "active"}`}>
          <Link href={`/admin/profile`}>
            <a>تغییر پروفایل</a>
          </Link>
        </li>
        <li
          className={`${router.asPath === "/admin/password" && "active"}`}
        >
          <Link href={`/admin/password`}>
            <a>تغییر رمز</a>
          </Link>
        </li>
        <li onClick={() => router.push("/")}>
          <a>خروج</a>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  max-width: 200px;
  min-height: 100vh;
  padding: 0.5em;
  box-shadow: 0px 5px 15px 5px rgba(0,0,0,0.42);
  .title {
    border-bottom: 2px solid #ccc;
    padding: 1em 0 3em 0;
  }
  .username {
    border-bottom: 2px solid #ccc;
    padding: 1em 0;
    text-align: center;
  }
  .tables,
  .menu {
    display: flex;
    flex-direction: column;
    padding: 1em 0;
    border-bottom: 2px solid #ccc;
    list-style: none;
    li {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0.9em 0.2em;
    }
    a {
      position: relative;
      text-decoration: none;
      color: #333;
    }
  }
  .menu-item {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0.9em 0.2em;
    position: relative;
    text-decoration: none;
    color: #333;
    border-bottom: 2px solid #ccc;
  }
  .active {
    background-color: rgba(0, 0, 0, 0.06);
    &::before {
      content: "";
      width: 7px;
      height: 100%;
      background-color: #3498db;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  a {
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Sidebar;
