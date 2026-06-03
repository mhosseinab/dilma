import AllActivity from "components/superUser/AllActivity";
import Layout from "components/superUser/Layout";
import React from "react";
import styled from "styled-components";

const Activity = () => {
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
        <div className="container">{tab.id === 1 ? "" : <AllActivity />}</div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 5em;
  margin-right: 2em;
  overflow-x: auto;
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
  { id: 1, label: "امتیازات پروژەهای من" },
  { id: 2, label: "کل فعالیت های من" },
];

export default Activity;
