import DropDown from "components/dashboard/UI/DropDown";
import LayOut from "components/dashboard/UI/LayOut";
import React from "react";
import styled from "styled-components";

import CreateDictionaryWord from "components/dashboard/dictionary/CreateDictionaryWord";
import DictionarySearchBox from "components/dashboard/dictionary/DictionarySearchBox";
import DictionaryTable from "components/dashboard/dictionary/DictionaryTable";

const Dictionary = () => {
  const [showCreateWord, setShowCreateWord] = React.useState(false);
  return (
    <LayOut>
      <DictionaryContainer>
        <div className="header">
          <h3>واژگان</h3>
          <button onClick={() => setShowCreateWord(!showCreateWord)}>
            ایجاد واژه
            {showCreateWord && <div className="arrow-down" />}
          </button>
        </div>
        {showCreateWord && (
          <CreateDictionaryWord setShowCreateWord={setShowCreateWord} />
        )}
        <DictionarySearchBox />
        <DictionaryTable />
      </DictionaryContainer>
    </LayOut>
  );
};

const DictionaryContainer = styled.div`
  width: 100%;
  height: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    button {
      width: 297px;
      height: 50px;
      background: #03ab00;
      border-radius: 3px;
      color: #fff;
      position: relative;
    }
  }
  @media screen and (max-width: 468px) {
    .header {
      flex-direction: column;
      gap: 2em;
    }
  }
`;

export default Dictionary;
