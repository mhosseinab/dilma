import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const ContentWork = () => {
  const {pathname} = useRouter()
  return (
    <Container>
      <ul className="menu">
        {menuItems.map((item) => (
          <Link key={item.id} href={item.link}>
            <li
              className={`${item.link === pathname && "active"}`}
            >
              {item.title}
              <svg
                className="icon"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.37189 5.55809L11.4848 5.38773L11.5128 6.72077L3.39988 6.89113L7.05017 10.3913L6.1275 11.3535L0.834446 6.27818L5.90978 0.985134L6.87203 1.9078L3.37189 5.55809Z"
                  fill="#fff"
                />
              </svg>
            </li>
          </Link>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3em;
  .menu {
    background: #1972cb;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    color: #fff;
    padding: 0 3em;
    transition: all ease 0.3s;
    overflow-x: scroll;
    li {
      cursor: pointer;
      padding: 0.5em 0.8em;
      min-width: 166px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
    }
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    .active {
      background-color: #fff;
      padding: 0.5em 0.8em;
      border-radius: 20px;
      color: #1972cb;
      .icon {
        display: none;
      }
    }
  }
`;

const menuItems = [
  { title: "ترجمه رسمی", link: "/translate", id: 1 },
  { title: "تولید محتوا", link: "/content", id: 2 },
  { title: "چاپ کتاب", link: "/", id: 3 },
  { title: "اعزام مترجم", link: "/", id: 4 },
  { title: "ترجمه فیلم و محتوا", link: "/translate/video", id: 5 },
];

export default ContentWork;
