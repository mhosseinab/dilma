import React from "react";
import styled from "styled-components";
import AdminTable from "./Table";

import coulmnsTable from "lib/paymentsTable.json";

const WorkersPaymentDetails = () => {
  const [tab, setTab] = React.useState(tabs[0]);
  const [workerName, setWorkerName] = React.useState<string>();
  return (
    <Container>
      <div className="table">
        <AdminTable columns={coulmnsTable} rows={[]} />
      </div>
      <div className="details">
        <p>کل درآمد :0 تومان</p>
        <p>درآمد ماه : 0 تومان</p>
        <p>درآمد هفته : تومان</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .table {
    margin: 3em 0;
  }
  .details {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2em;
    justify-content: space-between;
  }
`;

const tabs = [
  { id: 1, label: "کلیات مانده حساب" },
  { id: 2, label: "جزییات حساب ها" },
];

export default WorkersPaymentDetails;
