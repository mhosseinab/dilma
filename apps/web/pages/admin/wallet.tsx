import AdminTable from "components/superUser/Table";
import React from "react";

import columns from "lib/paymentsTable.json";
import rows from "lib/paymentsTableValues.json";
import styled from "styled-components";
import Layout from "../../components/superUser/Layout";

const Wallet = () => {
  return (
    <Layout>
      <Container>
        <h1>لیست تراکنش ها (مبالغ به تومان)</h1>
        <AdminTable columns={columns} rows={rows} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  padding: 2em;
  overflow-x: auto;
  width: 100%;
  h1 {
    font-size: 24px;
    padding-bottom: 2em;
    margin-bottom: 2em;
    border-bottom: 1px solid #dfdfdf;
  }
`;

export default Wallet;
