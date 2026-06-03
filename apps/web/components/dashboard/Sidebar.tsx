import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <SidebarComponents>
      <div className="sidebar__header">
        <Link href={"/dashboard"} passHref>
          <a style={{ cursor: "pointer" }}>
            <Image
              src={"/img/sidebarImg.png"}
              width={115}
              height={115}
              alt="menu"
            />
          </a>
        </Link>
        <h2>محسن خانی</h2>
        <Link href="/dashboard/order" passHref>
          <button>سفارش جدید</button>
        </Link>
      </div>
      <SidebarMenu />
    </SidebarComponents>
  );
};

const SidebarComponents = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  .sidebar__header {
    margin-top: 66px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    margin-bottom: 30px;
    h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 25px;
      text-align: center;

      color: #000000;
    }
    button {
      background-color: #305c7e;
      color: #fff;
      border-radius: 3px;
      height: 50px;
      width: 152px;
      margin-top: 44px;
    }
  }
`;

export default Sidebar;
