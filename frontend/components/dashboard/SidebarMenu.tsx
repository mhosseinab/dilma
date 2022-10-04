import Image from "next/image";
import React from "react";

import items from "lib/menuItems.json";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const SidebarMenu = () => {
  const path = useRouter();
  const pathName = path.pathname.replace("/dashboard/", "");

  const logoutHandler = () => {
    Cookies.remove("access");
    path.replace("/");
  };

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <Link key={index} href={`/dashboard/${item.link}`} passHref>
          <li className="menu__container">
            <Image
              src={item.icon}
              alt={item.title}
              width={17.21}
              height={19.8}
            />
            <span>{item.title}</span>
            <Image
              src={"/img/icons/arrow.svg"}
              alt="sa"
              width={5.66}
              height={8.49}
            />

            {pathName === item.link && <div className="menu__border" />}
          </li>
        </Link>
      ))}
      <span onClick={logoutHandler} className="out">
        خروج
      </span>
    </MenuContainer>
  );
};

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 326px;
  .out {
    cursor: pointer;
    margin: 22px 0;
  }
  .menu__container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    height: 70px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    &:last-of-type {
      border-bottom: none;
    }
    span {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
      text-align: right;
      margin-right: 20.39px;
      margin-left: 55.34px;
      width: 100px;
    }
    .menu__border {
      position: absolute;
      width: 9px;
      height: 67px;
      left: 0px;
      top: 0px;
      background: #305c7e;
    }
  }
`;

export default SidebarMenu;
