import ShowMore from "components/dashboard/UI/ShowMore";
import React, { FC } from "react";
import styled from "styled-components";

import data from "lib/paymentDetails.json";
import TabMenu from "../UI/TabMenu";

const PaymentsShowMore: FC = () => {
  const tabs = ["فاکتور های صادر شده", "پیش فاکتور ها"];
  const [currentTab, setCurrentTab] = React.useState(tabs[0]);
  return (
    <Container>
      <TabMenu
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        title="پروژه های شما"
      >
        {currentTab === tabs[0] && (
          <ShowMore
            date={data.date}
            title={data.title}
            status="پرداخت شده"
            statusColor="success"
            price={data.totalPrice}
            link={"/dashboard/payments"}
          />
        )}
      </TabMenu>
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  max-width: 365px;
  min-width: 365px;
  min-height: calc(100vh - 73px);
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    .btn {
      min-width: 122px;
      width: fit-content;
      padding: 0 1em;
      height: 28px;
      background: #305c7e;
      border-radius: 71px;
      color: #fff;
      font-size: 12px;
    }
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default PaymentsShowMore;
