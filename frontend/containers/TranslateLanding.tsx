import LandingLayout from "components/landings/LadingLayout";
import TranslateBlog from "components/landings/translate/TranslateBlog";
import TranslateCites from "components/landings/translate/TranslateCites";
import TranslateContactUs from "components/landings/translate/TranslateContactUs";
import TranslateDescribe from "components/landings/translate/TranslateDescribe";
import TranslateExamples from "components/landings/translate/TranslateExamples";
import TranslateExtraServices from "components/landings/translate/TranslateExtraServices";
import TranslateFingerPrint from "components/landings/translate/TranslateFingerPrint";
import TranslateHead from "components/landings/translate/TranslateHead";
import TranslateHire from "components/landings/translate/TranslateHire";
import TranslateLanguages from "components/landings/translate/TranslateLanguages";
const TranslateOurCustomers = dynamic(
  () => import("components/landings/translate/TranslateOurCustomers"),
  {
    ssr: false,
  }
);
import TranslatePrice from "components/landings/translate/TranslatePrice";
import TranslateQuality from "components/landings/translate/TranslateQuality";
import TranslateRewards from "components/landings/translate/TranslateRewards";
import TranslateOurServices from "components/landings/translate/TranslateServices";
import TranslateSteps from "components/landings/translate/TranslateSteps";
import TranslateSupported from "components/landings/translate/TranslateSupported";
import TranslateTeam from "components/landings/translate/TranslateTeam";
import TranslateWork from "components/landings/translate/TranslateWork";
import TranslateWorking from "components/landings/translate/TranslateWorking";
import dynamic from "next/dynamic";
import React from "react";
import styled from "styled-components";

const TranslateLanding = () => {
  return (
    <Wrapper>
      <LandingLayout>
        <TranslateHead />
        <TranslateFingerPrint />
        <TranslateDescribe />
        <TranslatePrice />
        <TranslateSteps />
        <TranslateWorking />
        <TranslateExtraServices />
        <TranslateLanguages />
        <TranslateCites />
        <TranslateSupported />
        <TranslateContactUs />
        <TranslateExamples />
        <TranslateQuality />
        <TranslateOurCustomers />
        <TranslateRewards />
        <TranslateOurServices />
        <TranslateWork />
        <TranslateHire />
        <TranslateTeam />
        <TranslateBlog />
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
