import Layout from "components/superUser/Layout";
import SellersList from "components/superUser/SellersList";
import React from "react";
import styled from "styled-components";

const Sellers = () => {
  return (
    <Layout>
      <Container>
        <h1 className="title">لیست نمایندگان فروش</h1>
        <SellersList />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 0 2em;
  .title {
    font-size: 28px;
    width: 100%;
    border-bottom: 2px solid #dfdfdf;
    padding: 0.5em 1em;
  }
`;

export default Sellers;
