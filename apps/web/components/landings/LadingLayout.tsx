import Footer from "components/Footer";
import React, { FC } from "react";
import styled from "styled-components";
import WideMenu from "../order/navbar/WideMenu";

interface Props {
  children: React.ReactNode;
}

const LandingLayout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <WideMenu />
      {children}
      <Footer color="#fff" />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0em 3em;
  @media screen and (max-width: 1024px) {
    padding: 0em 1em;
  }
`;

export default LandingLayout;
