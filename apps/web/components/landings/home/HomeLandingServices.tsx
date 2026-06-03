import Image from "next/image";
import orderItems from "lib/projectItems.json";
import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const HomeLandingServices = () => {
  const router = useRouter();
  return (
    <NewOrderContainer>
      <h1>خدمات ما</h1>
      <div className="orders">
        {orderItems.map((item, index) => (
          <div
            className="order"
            key={index}
            onClick={() => router.push(item.link)}
          >
            <div className="img__container">
              <Image src={item.icon} alt={item.title} width={95} height={94} />
            </div>
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </NewOrderContainer>
  );
};
const NewOrderContainer = styled.div`
  h1 {
    text-align: center;
    margin: 2em;
  }
  .orders {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3em;
    .order {
      min-width: 200px;
      height: 135px;
      background: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 51px 38px;
      transition: all 0.3s ease;
      cursor: pointer;
      .img__container {
        position: absolute;
        top: -3em;
      }
      h5 {
        font-weight: 700;
        font-size: 17px;
      }
      &:hover {
        background: #e4e4e4;
        box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .orders {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      place-content: center;

      .order {
        width: 90%;
        min-width: 100px;
        height: 100px;
        align-items: flex-end;
        margin: 2em 0.5em;
        h5 {
          margin-bottom: 1em;
        }
      }
    }
  }
`;

export default HomeLandingServices;
