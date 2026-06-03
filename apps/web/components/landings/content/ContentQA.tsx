import React from "react";
import qaItems from "lib/contentQa.json";
import styled from "styled-components";
import ContentQaItem from "./ContentQaItem";

const ContentQA = () => {
  return (
    <Container style={{ margin: "3em 0", fontWeight: 300 }}>
      <h3 style={{ fontWeight: 400, fontSize: 28 }}>سوالات متداول</h3>
      {qaItems.map((qa, index) => (
        <div className="qa" key={index}>
          <ContentQaItem title={qa.title} dec={qa.dec} key={index} />
        </div>
      ))}
    </Container>
  );
};

const Container = styled.div`
  background: linear-gradient(0deg, #e8f0f2, #e8f0f2), #ffffff;
  padding: 4em 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    text-align: center;
  }
  .qa {
    padding: 0 2em;
    border: 1px solid #c9cbd1;
    border-radius: 8px;
    width: 90%;
    margin: 1em 0;
  }
`;

export default ContentQA;
