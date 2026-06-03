import React, { FC } from "react";

import styled from "styled-components";
import Sidebar from "../Sidebar";
import MobileMenu from "./MobileMenu";

interface Props {
  children: React.ReactNode;
  title?: string;
  link?: string;
  buttonTitle?: string;
}

const LayOut: FC<Props> = ({ children, title, buttonTitle, link }) => {
  return (
    <Container>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="menu">
        <MobileMenu buttonTitle={buttonTitle} link={link} title={title} />
      </div>
      <div className="content">{children}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  .sidebar {
    width: 326px;
    min-width: 326px;
    max-width: 326px;
    height: 100vh;
    overflow-x: hidden;
  }
  .content {
    width: 100%;
    min-height: calc(100vh - 73px);
    background: #f5f5f5;
    padding: 75px 96px;
  }
  .menu {
    display: none;
    width: 100%;
  }
  @media screen and (max-width: 1124px) {
    flex-direction: column;
    overflow-x: hidden;
    .sidebar {
      display: none;
    }
    .menu {
      display: block;
    }
  }
  @media screen and (max-width: 624px) {
    .content {
      padding: 2em 1em;
      background-color: #fff;
    }
  }
`;

export default LayOut;
