import Image from "next/image";
import React from "react";
import styled from "styled-components";

const DeleveryInfo = () => {
  return (
    <Container>
      <h4>اطلاعات ارسال </h4>
      <div className={`delivery`}>
        <div className="icon">
          <Image
            src="/img/dashboard/order/building.png"
            alt=""
            width={42}
            height={42}
          />
          <div className="bg" />
        </div>
        <div className="details">
          <p>ارسال با پیک در تاریخ و ساعت</p>
          <p>روز جمعه، ۲۸/۹/۱۴۰۰ از بازه ۱۲ تا ۱۵</p>
        </div>
      </div>
      <form>
        <h4>توضیحات اضافی </h4>
        <textarea rows={5}></textarea>
      </form>
      <button className="next">مرحله بعد</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .delivery {
    display: flex;
    align-items: center;
    gap: 2em;
    margin: 1em 0;
    height: 100px;
    position: relative;
    .details {
      font-size: 12px;
      position: absolute;
      right: 130px;
      top: 65px;
    }
    .icon {
      display: flex;
      justify-content: center;
      width: 108px;
      text-align: center;
      position: relative;
      align-items: center;
      transition: all ease 0.3s;
    }
    .bg {
      position: absolute;
      top: 21px;
      /* right: 30px; */
      width: 109px;
      height: 48px;
      background: #f2f2f2;
      z-index: -1;
    }
  }
  form {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    gap: 2em;
    margin-bottom: 2em;
    textarea {
      border: 1px solid rgba(0, 0, 0, 0.25);
      resize:none ;
      outline: none;
      padding: 1em;
    }
  }
`;

export default DeleveryInfo;
