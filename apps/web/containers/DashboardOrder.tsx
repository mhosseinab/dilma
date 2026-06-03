/* eslint-disable react-hooks/exhaustive-deps */
import DeleveryInfo from "components/dashboard/order/DeleveryInfo";
import Delivery from "components/dashboard/order/Delivery";
import DeliveryTime from "components/dashboard/order/DeliveryTime";
import DocumentsOrder from "components/dashboard/order/Documents";
import DocumentTransfer from "components/dashboard/order/DocumentTransfer";
import Helping from "components/dashboard/order/Helpping";
import ProgressBar from "components/dashboard/order/ProgressBar";
import SelectTranslateLang from "components/dashboard/order/SelectLanguage";
import UploadDocuments from "components/dashboard/order/UploadDocuments";
import Image from "next/image";
import React, { useMemo } from "react";
import styled from "styled-components";

const DashboardOrderContainer = () => {
  const [level, setLevel] = React.useState(1);

  const current = useMemo(() => {
    switch (level) {
      case 1:
        return <SelectTranslateLang setLevel={setLevel} />;
      case 2:
        return <DocumentsOrder setLevel={setLevel} />;
      case 3:
        return <Helping setLevel={setLevel} />;
      case 4:
        return <UploadDocuments setLevel={setLevel} />;
      case 5:
        return <DocumentTransfer setLevel={setLevel} />;
      case 6:
        return <Delivery setLevel={setLevel} />;
      case 7:
        return <DeliveryTime setLevel={setLevel} />;
      case 8:
        return;
      case 9:
        return <DeleveryInfo />
      case 10:
        return
      default:
        return <SelectTranslateLang setLevel={setLevel} />;
    }
  }, [level]);
  return (
    <Container>
      <div className="img__container">
        <div className="img">
          <Image
            src="/img/dashboard/translate.png"
            width={127}
            height={128}
            alt="bg"
          />
        </div>
        <h1>
          ترجمه رسمی در
          <br /> <strong>کمترین زمان!</strong>
        </h1>
        <span className="price">تضمین قیمت!!</span>
      </div>
      <div className="levels">
        <ProgressBar width={(level * 10).toString()} />
        {current}
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 4em 2em;
  display: flex;
  align-items: flex-start;
  gap: 4em;
  .levels {
    width: 100%;
  }
  .img__container {
    min-width: 200px;
    height: 100%;
    position: relative;
    h1 {
      font-weight: 400;
      font-size: 33px;
      line-height: 50px;
      max-width: 308px;
      text-align: right;
      margin-bottom: 1em;
      strong {
        font-weight: 900;
      }
    }
    .img {
      text-align: center !important;
    }
    .price {
      background: #03ab00;
      box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
      border-radius: 77px;
      color: #fff;
      padding: 0.4em 1em;
      margin-top: 1em !important;
    }
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* for next level buttons */
  .next {
    background: #03ab00;
    color: #fff;
    padding: 0.5em 2em;
    border-radius: 7px;
    align-self: flex-end;
  }
`;

export default DashboardOrderContainer;
