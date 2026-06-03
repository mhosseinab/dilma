import DropDown from "components/dashboard/UI/DropDown";
import React from "react";
import styled from "styled-components";

const DictionarySearchBox = () => {
  const [languages, setLanguages] = React.useState<string>("در همه زبان ها");
  const [depends, setDepends] = React.useState("در همه زمینه ها");

  const languagesItems = ["در همه زبان ها", "فارسی"];
  const dependsItems = ["در همه زمینه ها"];

  return (
    <DictionaryContainer>
      <div className="searchbox">
        <input type="text" placeholder="کلمه مورد نظر را جستوجو کنید" />
        <div className="dropdowns">
          <DropDown
            value={languages}
            setValue={setLanguages}
            items={languagesItems}
          />
          <DropDown
            value={depends}
            setValue={setDepends}
            items={dependsItems}
          />
        </div>
      </div>
    </DictionaryContainer>
  );
};

const DictionaryContainer = styled.div`
  .searchbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 11px;
    padding: 0 30px;

    input {
      width: 250px;
      height: 21px;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      text-align: right;
      border: none;
      outline: none;
      color: #000000;
      box-shadow: none;
    }
    .dropdowns {
      display: flex;
    }
  }
  @media screen and (max-width: 712px) {
    .searchbox {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2em;
      height: fit-content;
      padding: 1em;
    }
  }
`;

export default DictionarySearchBox;
