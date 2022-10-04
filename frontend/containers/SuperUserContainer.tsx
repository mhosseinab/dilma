import AdminTable from "components/superUser/Table";
import React from "react";

import data from "lib/requestsTable.json";
import values from "lib/requestsTableValues.json";
import { Paper } from "@mui/material";
import RtlTextField from "components/dashboard/UI/RtlTextField";
import SelectAutoWidth from "components/dashboard/UI/DropDown";
import styled from "styled-components";

const SuperUserContainer = () => {
  const [code, setCode] = React.useState<string>("");
  const [sourceCode, setSourceCode] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");
  const [workers, setWorkers] = React.useState<string>("");
  const [source, setSource] = React.useState<string>("");
  return (
    <Container>
      <h1 style={{ fontSize: 24, margin: 30 }}>لیست درخواست های دیلما</h1>
      <div className="actions">
        <RtlTextField
          title="کد پروژه"
          setValue={setCode}
          value={code}
          color="#333"
          width="100px"
        />
        <SelectAutoWidth
          bg="#dfdfdf"
          width={150}
          items={["در حال انجام", "انجام شده"]}
          setValue={setStatus}
          value={status}
          title="همه وضعیت ها"
        />
        <SelectAutoWidth
          bg="#dfdfdf"
          width={150}
          items={["مترجم انگلیسی"]}
          setValue={setWorkers}
          value={workers}
          title="همه دیلما کارها"
        />
        <SelectAutoWidth
          bg="#dfdfdf"
          width={150}
          items={["منابع نوشتاری", "منابع ویدیویی"]}
          setValue={setSource}
          value={source}
          title="همه منابع"
        />
        <RtlTextField
          title="کد منبع"
          setValue={setSourceCode}
          value={source}
          color="#333"
          width="100px"
        />
        <button>بیاب</button>
        <button className="remove">پاک کن</button>
      </div>
      <AdminTable columns={data} rows={values} />
    </Container>
  );
};

const Container = styled.div`
  overflow-x: auto;
  padding: 2em;
  h1 {
    width: 90%;
    border-bottom: 1px solid #dfdfdf;
    padding-bottom: 1em;
  }
  .actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    padding: 2em 0;
    button {
      padding: 0.5em 2em;
    }
    .remove {
      font-size: 10px;
      background-color: transparent;
      color: red;
    }
  }
`;

export default SuperUserContainer;
