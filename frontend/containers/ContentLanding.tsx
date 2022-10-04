import ContentBlog from "components/landings/content/ContentBlog";
import ContentCalculator from "components/landings/content/ContentCalculator";
import ContentContactUs from "components/landings/content/ContentContantUs";
import ContentCreate from "components/landings/content/ContentCreate";
import ContentFeatures from "components/landings/content/ContentFeatures";
import ContentHeader from "components/landings/content/ContentHeader";
import ContentOurCustomers from "components/landings/content/ContentOurCustomers";
import ContentPrice from "components/landings/content/ContentPrice";
import ContentProgress from "components/landings/content/ContentProgress";
import ContentQA from "components/landings/content/ContentQA";
import ContentResource from "components/landings/content/ContentResource";
import ContentRewards from "components/landings/content/ContentRewards";
import ContentSubscribe from "components/landings/content/ContentSubscribe";
import ContentWork from "components/landings/content/ContentWork";
import LandingLayout from "components/landings/LadingLayout";

const ContentTech = dynamic(
  () => import("components/landings/content/ContentTech"),
  {
    ssr: false,
  }
);

import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

const ContentLanding = () => {
  return (
    <Wrapper>
      <LandingLayout>
        <ContentHeader />
        <ContentPrice />
        <ContentProgress />
        <ContentRewards />
        <ContentFeatures />
        <ContentTech />
        <ContentQA />
        <ContentCreate />
        <ContentContactUs />
        <ContentWork />
        <ContentSubscribe />
        <ContentCalculator />
        <ContentOurCustomers />
        <ContentResource />
        <ContentBlog />
      </LandingLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-x: hidden;
  > div {
    padding: 0;
    max-width: 100%;
  }
  .menu__container {
    padding: 0 2em;
  }
`;
export default ContentLanding;
