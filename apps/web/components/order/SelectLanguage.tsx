import React, { FC, useEffect } from "react";
import styled from "styled-components";
import DropDown from "./ui/DropDown";
import { useDispatch } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

interface Props {
  langs: {
    id: string;
    name: string;
    name_fa: string;
    is_source: boolean;
  }[];
}

const SelectLanguage: FC<Props> = ({ langs }) => {
  const [primaryLang, setPrimaryLang] = React.useState("");
  const [translateTo, setTranslateTo] = React.useState("");
  let languagesItems: string[] = langs?.map((lang) => lang.is_source ? lang.name_fa : "" );

  const dispatch = useDispatch();
  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (value: string , name : string) => {
    name === "lang" ? setPrimaryLang(value) : setTranslateTo(value);
    setOrderDetails({ name : name, data: value });
  };
  return (
    <Container className="border-right ">
      <div className="bullet" />
      <h5 className="title-border">زبان</h5>
      {languagesItems && languagesItems.length > 0 && (
        <div className="languages">
          <div className="lang">
            <span>از</span>
            <DropDown
              items={languagesItems}
              value={primaryLang}
              setValue={(value: string) => setOrderHandler(value , "lang")}
              title="زبان اصلی"
            />
          </div>
          <div className="lang">
            <span>به</span>
            <DropDown
              items={languagesItems}
              value={translateTo}
              setValue={(value: string) => setOrderHandler(value , "translateTo")}
              title="زبان ترجمه"
            />
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 2em;
  padding-bottom: 50px;
  font-size: 20px;
  .languages {
    display: flex;
    align-items: center;
    gap: 2em;
    .lang {
      display: flex;
      align-items: center;
      gap: 2em;
    }
    span {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    .languages {
      flex-direction: column;
    }
  }
`;

export default SelectLanguage;
