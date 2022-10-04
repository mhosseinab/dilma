import ShowMore from "components/dashboard/UI/ShowMore";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import TabMenu from "../UI/TabMenu";

const HomeOrder: FC = () => {
  const tabs = ["اتمام یافته", "در حال انجام", "معلق"];
  const [currentTab, setCurrentTab] = React.useState(tabs[0]);
  return (
    <Container>
      <TabMenu
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        title="پروژه های شما"
      >
        {currentTab === tabs[2] && (
          <ShowMore
            date="24/8/1401"
            title="پرداخت معوقه"
            status="معلق"
            link="/dashboard/projects"
          />
        )}
      </TabMenu>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .btn__container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
    margin: 1.5em 0;
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
  .new-ticket {
    background: #03ab00;
    border-radius: 3px;
    color: #fff;
    height: 50px;
    margin-top: 3em;
    width: 100%;
  }
  .qa {
    align-self: center;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export default HomeOrder;
