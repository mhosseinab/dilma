import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      {children}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

export default Layout;
