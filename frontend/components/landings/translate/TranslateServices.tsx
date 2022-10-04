import React from "react";
import styled from "styled-components";
import servicesItem from "lib/translateOverServices.json";

const TranslateOurServices = () => {
  return (
    <Container>
      {servicesItem.map((item, index) => (
        <div key={index} className="card">
          <img src={item.icon} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2em;
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    img {
      width: 100%;
      height: 100px;
    }
    p {
      background-color: #e1e4e5;
      color: #000;
      border-radius: 30px;
      padding: 0.2em 1em;
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  @media screen and (max-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
    p {
      font-size: 12px;
    }
  }
`;

export default TranslateOurServices;
