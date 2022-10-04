import LayOut from "components/dashboard/UI/LayOut";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import PaymentDetails from "components/dashboard/payments/PaymentDetails";

import data from "lib/paymentDetails.json";
import ProjectsShowMore from "components/dashboard/projects/ProjectShowMore";

const Tickets: NextPage = () => {
  const progressData = {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و ",
    percentage: "35",
  };

  return (
    <Container>
      <LayOut
        link="/dashboard/projects"
        buttonTitle="سفارش جدید"
        title="پروژه ها"
      >
        <div className="wrapper">
          <ProjectsShowMore />
          <div className="payments__view">
            <PaymentDetails
              date={data.date}
              title={data.title}
              totalPrice={data.totalPrice}
              price={data.price}
              details={data.details}
              progress={progressData}
            />
          </div>
        </div>
      </LayOut>
    </Container>
  );
};

const Container = styled.div`
  .wrapper {
    display: flex;
  }
  .content {
    padding: 0;
  }
  .payments__view {
    background: #ffffff;
    box-shadow: 0px 4px 48px rgba(185, 185, 185, 0.32);
    width: 100%;
    padding: 2em;
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      flex-direction: column;
      > div {
        width: 100%;
        max-width: 100%;
        min-height: fit-content;
      }
    }
  }
`;

export default Tickets;
