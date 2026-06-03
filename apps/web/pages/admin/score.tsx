import Layout from "components/superUser/Layout";
import React from "react";
import styled from "styled-components";

import currentMonthTable from "lib/monthScoreTable.json";
import preveseMonth from "lib/preveseMonthScoreTable.json";
import AdminTable from "components/superUser/Table";

const Score = () => {
  const [tab, setTab] = React.useState(tabs[0]);
  return (
    <Layout>
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
            <AdminTable columns={currentMonthTable} rows={[]} />
          ) : (
            <AdminTable columns={preveseMonth} rows={[]} />
          )}
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  .tabs {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2em;
    margin: 4em 0em;
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
  overflow-x: auto;
  margin: 0 2em;
  .table {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const tabs = [
  { id: 1, label: "جدول بهترین های ماه جاری" },
  { id: 2, label: "جدول برترین های ماه قبل" },
];

export default Score;
