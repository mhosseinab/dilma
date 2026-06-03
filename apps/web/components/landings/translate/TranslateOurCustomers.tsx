import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import customers from "lib/ourCustomers.json";
import styled from "styled-components";

const responsive = {
  0: { items: 1 },
  720: { items: 2 },
  1024: { items: 2 },
};

const items = customers.map((item, index) => (
  <div key={index} className="item carousel" data-value={index + 1}>
    <img src="/img/landing/landings/landing10.png" alt="" />
    <div className="details">
      <h5>{item.name ? item.name : "محسن خانی"}</h5>
      <h5>{item.as ? item.as : "طراح محصول"}</h5>
      <p>{item.message}</p>
    </div>
  </div>
));

const TranslateOurCustomers = () => {
  return (
    <Container>
      <h3>دیگران درباره ما چه میگویند ؟</h3>
      <AliceCarousel
        mouseTracking
        responsive={responsive}
        disableButtonsControls
        infinite
        items={items}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 3em;
  h3 {
    font-weight: 100;
  }
  user-select: none;

  .carousel {
    display: flex;
    align-items: flex-start;
    flex-direction: row-reverse;
    gap: 1em;
    cursor: pointer;
    margin: 3em 0;

    .details {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      text-align: right;
      h5 {
        font-weight: 800;
        font-size: 18px;
      }
    }
    img {
      width: 130px;
      height: 130px;
    }
    p {
      font-size: 15px;
      max-width: 90%;
    }
  }
  @media screen and (max-width: 468px) {
    margin: 3em 1em;
    img {
      width: 80px !important;
      height: 80px !important;
    }
  }
`;
export default TranslateOurCustomers;
