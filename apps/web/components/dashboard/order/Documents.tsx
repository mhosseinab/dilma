import React, { FC } from "react";
import styled from "styled-components";

import DocumentOrders from "./DocumentOrders";
import DocumentsCategory from "./DocumentsCategory";

interface Props {
  setLevel: (event: number) => void;
}

const DocumentsOrder: FC<Props> = ({ setLevel }) => {
  const [currentTab, setCurrentTab] = React.useState("all");

  return (
    <Container>
      <div className="menu">
        <div className="details__head">
          <span
            onClick={() => setCurrentTab("all")}
            className={`${currentTab === "all" && "active"}`}
          >
            نمایش همه اسناد
          </span>
          <span
            onClick={() => setCurrentTab("categories")}
            className={`${currentTab === "categories" && "active"}`}
          >
            دسته بندی ها
          </span>
        </div>
      </div>
      {currentTab === "all" ? <DocumentOrders /> : <DocumentsCategory />}

      <button onClick={() => setLevel(3)} className="next">
        مرحله بعد
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .menu {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    .details__head {
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-bottom: 1px solid rgba(0, 0, 0, 0.09);
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        cursor: pointer;
        padding: 12px 0;
        width: 85px;
      }
      .active {
        border-bottom: 3px solid #232323;
      }
    }
  }
`;

export default DocumentsOrder;
