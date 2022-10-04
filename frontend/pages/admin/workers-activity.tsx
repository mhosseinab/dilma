import SelectAutoWidth from "components/dashboard/UI/DropDown";
import Layout from "components/superUser/Layout";
import React from "react";
import styled from "styled-components";

import tableHead from "lib/workersActivity.json";
import AdminTable from "components/superUser/Table";

const WorkersActivity = () => {
  const [tab, setTab] = React.useState(tabs[0]);
  const [translatorType, setTranslatorType] = React.useState("");
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
        <div className="dropdown">
          <SelectAutoWidth
            items={["همه مترجم ها"]}
            setValue={setTranslatorType}
            value={translatorType}
            title="همه مترجم ها"
            width={150}
          />
        </div>
        <AdminTable columns={tableHead} rows={[]} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin: 3em 2em;
  overflow-x: auto;
  .dropdown {
    margin: 2em 0;
  }
  .tabs {
    list-style: none;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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
  { id: 1, label: "فعالیت های ماه جاری" },
  { id: 2, label: "فعالیت های ماه قبل" },
  { id: 3, label: "کل فعالیت ها" },
  { id: 4, label: "جزییات امتیاز" },
];

export default WorkersActivity;
