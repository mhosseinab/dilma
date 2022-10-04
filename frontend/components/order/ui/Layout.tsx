import Footer from "components/Footer";
import React, { FC } from "react";
import styled from "styled-components";
import WideMenu from "../navbar/WideMenu";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <WideMenu />
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0em 3em;
  footer {
    background-color: transparent;
  }
  @media screen and (max-width: 1024px) {
    padding: 0em 3em;
  }
`;

export default Layout;
