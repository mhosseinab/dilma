import React from "react";
import styled from "styled-components";

const HomeLandingContactUs = () => {
  return (
    <Container>
      <h4>با ما در ارتباط باشید</h4>
      <button>۰۲۱۶۷۴۵۸۷۶۵</button>
      <button>hi@dilmaa.com</button>
      <img width={300} src="/img/landing/homeSvg/mail.svg" alt="" />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
  margin: 3em 0;
  button {
    background: #305c7e;
    /* Ligh shadow */
    box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    color: #fff;
    padding: 0.4em 2em;
  }
  @media screen and (max-width: 778px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    button {
      width: 213px;
    }
    img,
    h4 {
      display: none;
    }
  }
`;
export default HomeLandingContactUs;
