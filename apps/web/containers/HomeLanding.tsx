import HomeLandingBlog from "components/landings/home/HomeLandingBlog";
import HomeLandingCategoreis from "components/landings/home/HomeLandingCategoreis";
import HomeLandingContactUs from "components/landings/home/HomeLandingContactUs";
import HomeLandingHeader from "components/landings/home/HomeLandingHeader";
import HomeLandingLogo from "components/landings/home/HomeLandingLogo";
import HomeLandingPrice from "components/landings/home/HomeLandingPrice";
import HomeLandingQa from "components/landings/home/HomeLandingQa";
import HomeLandingServices from "components/landings/home/HomeLandingServices";
import HomeLandingWorking from "components/landings/home/HomeLandingWorking";
import OurServices from "components/landings/home/OurServices";
import LandingLayout from "components/landings/LadingLayout";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const Carousel = dynamic(
  () => import("components/landings/home/CustomersCarousel"),
  {
    ssr: false,
  }
);
const HomeLanding: NextPage = () => {
  return (
    <LandingLayout>
      <HomeLandingHeader />
      <div className="br" />
      <OurServices />
      <HomeLandingWorking />
      <HomeLandingServices />
      <div className="br" />
      <HomeLandingCategoreis />
      <div className="br" />
      <HomeLandingPrice />
      <div className="br" />
      <Carousel />
      <div className="br" />
      <HomeLandingBlog />
      <div className="br" />
      <HomeLandingQa />
      <HomeLandingLogo />
      <HomeLandingContactUs />
    </LandingLayout>
  );
};

export default HomeLanding;
