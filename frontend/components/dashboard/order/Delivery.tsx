import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  setLevel: (event: number) => void;
}

const Delivery: FC<Props> = ({ setLevel }) => {
  const [delivery, setDelivery] = React.useState("");
  return (
    <Container>
      <h3>شیوه ارسال مدارک فیزیکی خود را انتخاب کنید!</h3>
      <div className="deliveries">
        <div
          className={`delivery ${delivery === "پیک" && "active"} `}
          onClick={() => setDelivery("پیک")}
        >
          <Image
            src="/img/dashboard/order/truk.png"
            alt=""
            width={42}
            height={42}
          />
          <h6>پیک</h6>
          <p>پیک رایگان برای مبلغ بالای مثلا ۵۰۰ هزارتومان</p>
          <div className="bg" />
        </div>
        <div
          className={`delivery ${delivery === "حضوری" && "active"} `}
          onClick={() => setDelivery("حضوری")}
        >
          <Image
            src="/img/dashboard/order/building.png"
            alt=""
            width={42}
            height={42}
          />
          <h6>حضوری</h6>
          <div className="bg" />
        </div>
      </div>
      <button onClick={() => setLevel(7)} className="next">
        مرحله بعد
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  .deliveries {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4em;
    margin: 4em 0;
    .delivery {
      text-align: center;
      width: 181px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all ease 0.3s;
      .bg {
        position: absolute;
        bottom: 3px;
        width: 109px;
        height: 48px;
        background: #f2f2f2;
        z-index: -1;
      }
      h6 {
        font-weight: 700;
        font-size: 12px;
        padding: 10px 0 5px 0;
      }
      p {
        position: absolute;
        bottom: -30px;
        font-weight: 400;
        font-size: 10px;
        line-height: 28px;
      }
    }
    .active {
      transform: scale(1.3);
    }
  }
  @media screen and (max-width: 548px) {
    .delivery {
      p {
        white-space: nowrap;
        font-size: 8px !important;
      }
    }
  }
`;

export default Delivery;
