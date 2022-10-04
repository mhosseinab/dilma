import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  currentTab: string;
  setCurrentTab: (event: string) => void;
  title: string;
  tabs: string[];
}

const TabMenu: FC<Props> = ({
  children,
  title,
  currentTab,
  setCurrentTab,
  tabs,
}) => {
  return (
    <Container>
      <div className="top">
        <h4>{title}</h4>
        <div className="btn__container">
          {tabs.map((tab, index) => (
            <button
              onClick={() => setCurrentTab(tab)}
              key={index}
              className={`btn ${currentTab === tab ? "active" : "deactive"}`}
            >
              {tab}
            </button>
          ))}
        </div>
        {children}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn__container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    margin: 1.5em 0;
    .btn {
      width: 122px;
      height: 28px;
      background: #305c7e;
      border-radius: 71px;
      color: #fff;
      font-size: 12px;
    }
    .deactive {
      opacity: 0.6;
    }
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .new-ticket {
    background: #03ab00;
    border-radius: 3px;
    color: #fff;
    height: 50px;
    margin-top: 3em;
    width: 100%;
  }
  .qa {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export default TabMenu;
