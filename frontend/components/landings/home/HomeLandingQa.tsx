import React from "react";
import qaItems from "lib/homeQa.json";
import QA from "../UI/QA";

const HomeLandingQa = () => {
  return (
    <div style={{ margin: "5em 0", fontWeight: 300 }}>
      <h3 style={{ fontWeight: 400, fontSize: 28 }}>سوالات متداول</h3>
      {qaItems.map((qa, index) => (
        <QA title={qa.title} dec={qa.dec} key={index} />
      ))}
    </div>
  );
};

export default HomeLandingQa;
