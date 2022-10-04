import React from "react";
import AdminTable from "./Table";

import allActivityTable from "lib/allActivityTable.json";
import allActivityValues from "lib/allActivityValues.json";
import styled from "styled-components";

const AllActivity = () => {
  return (
    <Container>
      <AdminTable columns={allActivityTable} rows={allActivityValues} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 2em;
`;

export default AllActivity;
