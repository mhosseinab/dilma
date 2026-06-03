import ShowMore from "components/dashboard/UI/ShowMore";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import TabMenu from "../UI/TabMenu";

const TicketShowMore: FC = () => {
  const tabs = ["تیکت ها", "معلق ها"];
  const [currentTab, setCurrentTab] = React.useState(tabs[0]);
  return (
    <Container>
      <div className="top">
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
              status="معلق"
              link="/dashboard/tickets"
            />
          )}
        </TabMenu>

        <Link passHref href={"/dashboard/tickets/new"}>
          <button className="new-ticket">ارسال تیکت</button>
        </Link>
      </div>
      <a className="qa">
        سوالات متداول
        <Image
          src={"/img/icons/left-chevron.svg"}
          width={10}
          height={10}
          alt="chevron"
        />
      </a>
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  max-width: 365px;
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
    margin: 3em 0 0 0;
  }
`;

export default TicketShowMore;
