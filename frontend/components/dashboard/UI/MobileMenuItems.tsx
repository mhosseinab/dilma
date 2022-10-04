import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import items from "lib/menuItems.json";
import styled from "styled-components";

const MobileMenuItems: FC = () => {
  return (
    <MenuContainer>
      {items.map((item, index) => (
        <Link key={index} href={`/dashboard/${item.link}`} passHref>
          <li className="menu__container">
            <div className="title">
              <Image
                src={item.icon}
                alt={item.title}
                width={17.21}
                height={19.8}
              />
              <span>{item.title}</span>
            </div>
            <Image
              src={"/img/icons/arrow.svg"}
              alt="sa"
              width={5.66}
              height={8.49}
            />
          </li>
        </Link>
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f1f1f1;
  margin-top: 3em;
  .menu__container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
    cursor: pointer;
    height: 70px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    &:last-of-type {
      border-bottom: none;
    }
    .title {
      display: flex;
      align-items: center;
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

export default MobileMenuItems;
