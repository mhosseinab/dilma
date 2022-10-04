import React from "react";
import styled from "styled-components";

const TranslateExamples = () => {
  const [currentMenu, setCurrentMenu] = React.useState(1);
  return (
    <Container>
      <ul className="menu">
        {menuItems.map((item) => (
          <li
            className={`${item.id === currentMenu && "active"}`}
            key={item.id}
            onClick={() => setCurrentMenu(item.id)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="content">
        <div className="before">
          <h4>متن اصلی</h4>
          <img src="/img/translate/officialTranslate/before.png" alt="" />
        </div>
        <div className="after">
          <h4>متن ترجمه شده</h4>
          <img src="/img/translate/officialTranslate/after.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3em;
  .menu {
    background: #ff683b;
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
      color: #ff683b;
    }
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
    margin: 2em 0;
    padding: 0 1em;
    img {
      width: 100%;
    }
    h4 {
      margin-bottom: 0.5em;
    }
  }
  @media screen and (max-width: 668px) {
    .content {
      flex-direction: column;
    }
  }
`;

const menuItems = [
  { title: "نمونه ترجمه پزشکی", id: 1 },
  { title: "نمونه ترجمه شیمی", id: 2 },
  { title: "نمونه ترجمه شیمی", id: 3 },
  { title: "نمونه ترجمه شیمی", id: 4 },
  { title: "نمونه ترجمه شیمی", id: 5 },
  { title: "نمونه ترجمه شیمی", id: 6 },
];

export default TranslateExamples;
