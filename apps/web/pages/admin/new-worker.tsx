import Layout from "components/superUser/Layout";
import NewWorkerInputs from "components/superUser/NewWorkerInputs";
import React from "react";
import styled from "styled-components";

const NewWorker = () => {
  return (
    <Layout>
      <Container>
        <h1 className="title">تعریف ترنج کار جدید</h1>
       <NewWorkerInputs/>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  .title {
    border-bottom: 2px solid #dfdfdf;
    width: 100%;
    font-size: 28px;
    padding: 0.5em 1em 0.5em 0;
  }
`;

export default NewWorker;
