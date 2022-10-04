import Layout from "components/superUser/Layout";
import PaymentsContainer from "components/superUser/PaymentsContainer";
import React from "react";
import styled from "styled-components";

const Payments = () => {
  return (
    <Layout>
      <Container>
        <PaymentsContainer />
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 5em 2em;
`;

export default Payments;
