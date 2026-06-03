import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import styled from "styled-components";

const team = [
  {
    name: "",
    job: "",
    socials: [
      { icon: "/img/icons/instagram.svg", link: "https://instgram.com" },
      { icon: "/img/icons/linkedin.svg", link: "https://linkedin.com" },
    ],
  },
  {
    name: "",
    job: "",
    socials: [
      { icon: "/img/icons/instagram.svg", link: "https://instgram.com" },
      { icon: "/img/icons/linkedin.svg", link: "https://linkedin.com" },
    ],
  },
  {
    name: "",
    job: "",
    socials: [
      { icon: "/img/icons/instagram.svg", link: "https://instgram.com" },
      { icon: "/img/icons/linkedin.svg", link: "https://linkedin.com" },
    ],
  },
];

const items = team.map((item, index) => (
  <div
    key={index}
    className="item carousel"
    style={{ width: 300 }}
    data-value={index + 1}
  >
    <img className="profile" src="/img/landing/landings/landing10.png" alt="" />
    <div className="details">
      <h5>{item.name ? item.name : "محسن خانی"}</h5>
      <h6>{item.job ? item.job : "طراح محصول"}</h6>
      <div className="socials">
        {item.socials.map((social, index) => (
          <a href={social.link} key={index} target="_blank" rel="noreferrer">
            <img src={social.icon} width={24} height={24} alt="" />
          </a>
        ))}
      </div>
    </div>
  </div>
));

const TranslateTeam = () => {
  return (
    <Container>
      <div className="title">
        <h3>تیم محصول</h3>
        <a>به ما بپیوندید</a>
      </div>
      <AliceCarousel
        mouseTracking
        autoWidth
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </Container>
  );
};

const Container = styled.div`
  margin: 8em 0;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
    h3 {
      font-weight: 400;
      font-size: 30px;
    }
    a {
      padding: 0.5em 1em;
      border-radius: 3px;
      background: #305c7e;
      color: #fff;
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
        opacity: 1;
      }
    }
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
      h6 {
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 1em;
      }
    }
    .profile {
      width: 130px;
      height: 130px;
    }
  }
  .alice-carousel__stage {
    display: flex;
    li {
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 468px) {
    margin: 3em 1em;
  }
`;
export default TranslateTeam;
