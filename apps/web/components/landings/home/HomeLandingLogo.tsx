import React from "react";
import styled from "styled-components";

const HomeLandingLogo = () => {
  return (
    <Container>
      <img
        src="/img/landing/banks/bankmarkazi.svg"
        alt=""
        width={100}
        height={100}
      />
      <img
        src="/img/landing/banks/iranzamin.svg"
        alt=""
        width={100}
        height={100}
      />
      <img
        src="/img/landing/banks/novinarian.svg"
        alt=""
        width={100}
        height={100}
      />
      <img
        src="/img/landing/banks/shaparak.svg"
        alt=""
        width={100}
        height={100}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 7em 0  3em 0 ;
  gap: 2em;
`;

export default HomeLandingLogo;
