import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  setLevel: (event: number) => void;
}

const Helping: FC<Props> = ({ setLevel }) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <Container>
      <h3>قصد ترجمه چه دسته از اسنادی را دارید؟</h3>
      <div className="cards">
        <div
          onClick={() => setSelectedValue("help")}
          className={`card ${selectedValue === "help" && "active"}`}
        >
          <div className="img">
            <Image
              src="/img/dashboard/order/help.png"
              alt=""
              width={70}
              height={70}
            />
            <div className="bg" />
          </div>
          <div className="title">
            <div className="question">?</div>
            <div className="answer">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون
            </div>
            <h5>برای انتخاب اسناد نیاز به راهنمایی دارم.</h5>
          </div>
          <p>(استفاده از پکیج های آماده)</p>
        </div>
        <div
          onClick={() => setSelectedValue("by-self")}
          className={`card ${selectedValue === "by-self" && "active"}`}
        >
          <div className="img">
            <Image
              src="/img/dashboard/order/person.png"
              alt=""
              width={70}
              height={70}
            />
            <div className="bg" />
          </div>
          <h5>میدانم به چه اسنادی نیاز دارم.</h5>
          <p>(انتخاب اسناد)</p>
        </div>
      </div>
      <button onClick={() => setLevel(4)} className="next">
        مرحله بعد
      </button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  .cards {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4em;
    margin-top: 2em;
  }
  .card {
    max-width: 125px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.56em;
    cursor: pointer;
    .title {
      display: flex;
      position: relative;
      .question {
        display: none;
        position: absolute;
        height: 20px;
        width: 20px;
        right: -25px;
        background: #c4c4c4;
      }
      .answer {
        display: none;
        position: absolute;
        width: 80px;
        height: 100px;
        right: -107px;
        top: 20px;
        padding: 5px;
        background: #c4c4c4;
        font-weight: 700;
        font-size: 9px;
      }
    }
    h5 {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
    p {
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      white-space: nowrap;
    }
  }
  .img {
    position: relative;
    width: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5em;
    .bg {
      position: absolute;
      width: 109px;
      height: 48px;
      background: #f2f2f2;
      z-index: -1;
      bottom: -12px;
    }
  }
  .active {
    .question,
    .answer {
      display: block !important;
    }
    h5,
    p {
      font-weight: 700 !important;
    }
  }
  @media screen and (max-width: 568px) {
    .cards {
      align-self: center;
      h5 {
        font-size: 13px;
      }
      .question,
      .answer {
        display: none !important;
      }
    }
  }
`;

export default Helping;
