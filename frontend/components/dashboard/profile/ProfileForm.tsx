import * as React from "react";

import ProfileFormHeader from "./ProfileFormHeader";
import ProfileFormInputs from "./ProfileFormInputs";
import ShowMore from "components/dashboard/UI/ShowMore";
import styled from "styled-components";

const ProfileForm = () => {
  const [currentSection, setCurrentSection] = React.useState("order");
  return (
    <Container>
      <div className="wrapper">
        <ProfileFormHeader />
        <ProfileFormInputs />
      </div>
      <div className="details">
        <div className="details__head">
          <span
            onClick={() => setCurrentSection("order")}
            className={`${currentSection === "order" && "active"}`}
          >
            سفارش ها
          </span>
          <span
            onClick={() => setCurrentSection("payment")}
            className={`${currentSection === "payment" && "active"}`}
          >
            تراکنش ها
          </span>
        </div>
        {currentSection === "order" && (
          <ShowMore
            title="ترجمه رسمی"
            date="28/8/1400"
            status="در دست انجام"
            price="450000"
            link="/dashboard/projects"
          />
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4em;
  > .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
  > .details {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    .details__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: right;
        cursor: pointer;
        padding: 12px 0;
        width: 85px;
      }
      .active {
        border-bottom: 3px solid #232323;
      }
    }
  }
  @media screen and (max-width: 824px) {
    margin-top: 2em;
    flex-direction: column;

    > .wrapper,
    .details {
      width: 100%;
    }
  }
`;
export default ProfileForm;
