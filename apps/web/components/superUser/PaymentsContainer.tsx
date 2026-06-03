import React from "react";
import styled from "styled-components";
import AdminTable from "./Table";

import coulmnsTable from "lib/paymentsTable.json";
import WorkersPaymentDetails from "./WorkersPaymentDetails";

const PaymentsContainer = () => {
  const [tab, setTab] = React.useState(tabs[0]);
  const [workerName, setWorkerName] = React.useState<string>();
  return (
    <Container>
      <ul className="tabs">
        {tabs.map((item) => (
          <li
            onClick={() => setTab(item)}
            className={`${item.id === tab.id && "active"}`}
            key={item.id}
          >
            {item.label}
          </li>
        ))}
      </ul>
      <div className="table">
        {tab.id === 1 ? (
          <AdminTable columns={coulmnsTable} rows={[]} />
        ) : (
          <WorkersPaymentDetails />
        )}{" "}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .table {
    margin: 3em 0;
  }
  .tabs {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2em;
    li {
      position: relative;
      cursor: pointer;
      padding-bottom: 1em;
    }
    .active {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4px;
        background-color: #3498db;
        border-radius: 3px;
      }
    }
  }
`;

const tabs = [
  { id: 1, label: "کلیات مانده حساب" },
  { id: 2, label: "جزییات حساب ها" },
];

export default PaymentsContainer;
