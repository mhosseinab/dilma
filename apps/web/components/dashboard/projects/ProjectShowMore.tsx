import ShowMore from "components/dashboard/UI/ShowMore";
import React, { FC } from "react";
import styled from "styled-components";

import data from "lib/paymentDetails.json";
import TabMenu from "../UI/TabMenu";

const ProjectsShowMore: FC = () => {
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
  width: 40vw;
  max-width: 365px;
  min-width: 365px;
  min-height: calc(100vh - 73px);
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ProjectsShowMore;
