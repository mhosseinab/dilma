import ShowMore from "components/dashboard/UI/ShowMore";
import React from "react";
import styled from "styled-components";
import TabMenu from "../UI/TabMenu";

const ShortNotification = () => {
  const tabs = ["موارد مالی", "موارد سیستمی"];
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
            date="24/8/1401"
            title="پرداخت معوقه"
            link="/dashboard/payments"
          />
        )}
      </TabMenu>
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  max-width: 365px;
  min-height: 100vh;
  padding: 2em 1em;
  .btn__container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    .btn {
      width: 122px;
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

export default ShortNotification;
