import Image from "next/image";
import React from "react";
import orderItems from "lib/projectItems.json";
import styled from "styled-components";
import { useRouter } from "next/router";

const NewOrder = () => {
  const router = useRouter();

  return (
    <NewOrderContainer>
      <h4>سفارش جدید دارید ؟</h4>
      <div className="orders">
        {orderItems.map((item, index) => (
          <div
            className="order"
            key={index}
            onClick={() => router.push("/order", { query: item.title })}
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
  .orders {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3em;
    .order {
      width: 200px;
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
      }
      &:hover {
        background: #e4e4e4;
        /* Ligh shadow */

        box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
`;

export default NewOrder;
