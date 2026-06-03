import React, { FC } from "react";
import styled from "styled-components";

import documentsTransfer from "lib/documentTransfer.json";

interface Props {
  setLevel: (event: number) => void;
}

const DocumentTransfer: FC<Props> = ({ setLevel }) => {
  const [selectedTransfer, setSelectedTransfer] = React.useState("");
  return (
    <Container>
      <h3>شیوه دریافت مدارک از شما به چه شکل است؟</h3>

      <div className="transfers">
        {documentsTransfer.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedTransfer(item.title)}
            className={` transfer`}
          >
            <button
              className={`  ${selectedTransfer === item.title && "active"}`}
              onClick={() => setSelectedTransfer(item.title)}
            >
              {item.title}
            </button>
            <ul>
              {item.menu.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className="next" onClick={() => setLevel(6)}>
        مرحله بعد
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  .transfers {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    margin: 4em 0;

    .transfer {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      width: 160px;
      li {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        margin-bottom: 1em;
        text-align: center;
      }
    }
    button {
      margin: 0em 0 2em 0;
      width: 160px;
      height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease 0.3s;
      border-radius: 5px;
      &:hover {
        box-shadow: 0px 0px 10px 5px rgba(185, 185, 185, 0.3);
      }
    }
    .active {
      border: 1.5px solid #000000;
    }
  }
`;

export default DocumentTransfer;
