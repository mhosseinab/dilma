import React from "react";
import AdminTable from "./Table";

import sellersValues from "lib/sellersListValues.json";
import RtlTextField from "components/dashboard/UI/RtlTextField";
import SelectAutoWidth from "components/dashboard/UI/DropDown";
import styled from "styled-components";

const SellersList = () => {
  const [serach, setSearch] = React.useState<string>("");
  const [status, setStatus] = React.useState<string>("");
  return (
    <Container>
      <div className="actions">
        <RtlTextField
          title="متن جستجو"
          setValue={setSearch}
          value={serach}
          color="#333"
          width="120px"
        />
        <SelectAutoWidth
          bg="#dfdfdf"
          width={150}
          items={["در حال انجام", "انجام شده"]}
          setValue={setStatus}
          value={status}
          title="همه وضعیت ها"
        />
        <button>بیاب</button>
        <button className="remove">پاک کن</button>
      </div>
      <AdminTable columns={columns} rows={sellersValues} />
    </Container>
  );
};

const Container = styled.div`
  .actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    padding: 2em 0;
    button {
      padding: 0.5em 2em;
      height: 38px;
    }
    .remove {
      font-size: 10px;
      background-color: transparent;
      color: red;
    }
  }
`;

const columns = [
  { id: "code", label: "کد ترنج کار" },
  { id: "name", label: "نام" },
  { id: "family", label: "نام خانوادگی" },
  { id: "mobile", label: "موبایل" },
  { id: "email", label: "ایمیل" },
  { id: "score", label: "امتیاز" },
  { id: "type", label: "نوع" },
  { id: "status", label: "وضعیت" },
  { id: "works", label: "اقدامات" },
];

export default SellersList;
