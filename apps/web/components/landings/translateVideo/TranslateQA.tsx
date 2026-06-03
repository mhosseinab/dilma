import React from "react";
import qaItems from "lib/translateQa.json";
import QA from "../UI/QA";

const TranslateQA = () => {
  return (
    <div style={{ margin: "3em 2em", fontWeight: 300 }}>
      <h3 style={{ fontWeight: 400, fontSize: 28 }}>سوالات متداول</h3>
      {qaItems.map((qa, index) => (
        <QA title={qa.title} dec={qa.dec} key={index} />
      ))}
    </div>
  );
};

export default TranslateQA;
