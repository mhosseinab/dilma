import LandingLayout from "components/landings/LadingLayout";
import TranslateExamples from "components/landings/translateVideo/TranslateExamples";
import TranslateFormats from "components/landings/translateVideo/TranslateFormats";
import TranslateHead from "components/landings/translateVideo/TranslateHead";
import TranslateOptions from "components/landings/translateVideo/TranslateOptions";
import TranslateOurOptions from "components/landings/translateVideo/TranslateOurOptions";
import React from "react";
import styled from "styled-components";

import dynamic from "next/dynamic";
import TranslateWorking from "components/landings/translateVideo/TranslateWorking";
import TranslateVideos from "components/landings/translateVideo/TranslateVideos";
import TranslateChart from "components/landings/translateVideo/TranslateChart";
import TranslateBlog from "components/landings/translateVideo/TranslateBlog";
import TranslateQA from "components/landings/translateVideo/TranslateQA";

const TranslateOurServices = dynamic(
  () => import("components/landings/translateVideo/TranslateOurServices"),
  {
    ssr: false,
  }
);

const TranslateLanding = () => {
  return (
    <Wrapper>
      <LandingLayout>
        <TranslateHead />
        <TranslateOptions />
        <TranslateFormats />
        <TranslateExamples />
        <TranslateOurOptions />
        <TranslateOurServices />
        <TranslateWorking />
        {/* <TranslateVideos /> */}
        <TranslateChart />
        <TranslateBlog />
        <TranslateQA />
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

export default TranslateLanding;
