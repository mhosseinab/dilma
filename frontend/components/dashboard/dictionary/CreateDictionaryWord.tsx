import "react-toastify/dist/ReactToastify.css";

import * as ActionCreators from "redux/ActionCreators";

import React, { FC } from "react";
import { ToastContainer, toast } from "react-toastify";

import DropDown from "components/dashboard/UI/DropDown";
import RtlTextField from "components/dashboard/UI/RtlTextField";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";

interface Props {
  setShowCreateWord: (event: boolean) => void;
}

const CreateDictionaryWord: FC<Props> = ({ setShowCreateWord }) => {
  const [primaryWord, setPrimaryWord] = React.useState("");
  const [wordDepends, setWordDepends] = React.useState("");
  const [primaryTranslate, setPrimaryTranslate] = React.useState("");
  const [primaryTranslateTo, setPrimaryTranslateTo] = React.useState("");
  const words = ["فارسی", "انگلیسی"];
  const depends = ["پاسپورت"];

  const dispatch = useDispatch();

  const { setTranslate } = bindActionCreators(ActionCreators, dispatch);

  const sendTranslateHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let data = {
      word: primaryTranslate,
      primaryWord,
      wordDepends,
      primaryTranslate,
      primaryTranslateTo,
      status: "تایید شده",
    };
    if (
      !primaryWord ||
      !wordDepends ||
      !primaryTranslate ||
      !primaryTranslateTo
    ) {
      toast.error("لطفا تمام فیلد ها را وارد کنید");
    } else {
      setTranslate(data);
      setShowCreateWord(false);
    }
  };

  return (
    <Container>
      <ToastContainer />
      <form className="form">
        <div className="inputs">
          <div className="inputs__drop">
            <DropDown
              value={primaryWord}
              setValue={setPrimaryWord}
              items={words}
              border={true}
              title="زبان واژه"
            />
            <DropDown
              value={wordDepends}
              setValue={setWordDepends}
              items={depends}
              border={true}
              title="زمینه واژه"
            />
          </div>
          <div className="inputs__field">
            <RtlTextField
              value={primaryTranslate}
              setValue={setPrimaryTranslate}
              color="#333"
              title="واژه"
            />
            <RtlTextField
              value={primaryTranslateTo}
              setValue={setPrimaryTranslateTo}
              title="معنی تخصصی واژه"
              color="#333"
            />
          </div>
        </div>
        <input
          onClick={sendTranslateHandler}
          type="submit"
          value="ثبت"
          className="btn"
        />
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: fit-content;
  width: 100%;
  background: #ffffff;
  border-radius: 3px;
  margin: 2.8em 0 2em 0;
  padding: 37px 37px;
  .form {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    .btn {
      width: 125px;
      height: 30px;
      background: #03ab00;
      border-radius: 3px;
      color: #ffffff;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 70%;
    flex-wrap: wrap;
    gap: 18px;
    div,
    form {
      width: 100%;
      display: flex;
      gap: 34px;
    }
  }
  @media screen and (max-width: 800px) {
    form {
      flex-direction: column;
      width: 100%;
    }
    .inputs {
      display: flex;
      flex-direction: column;
      width: 70%;
      gap: 18px;
      div {
        width: 100%;
        display: flex;
        gap: 34px;
        flex-wrap: wrap;
      }
    }
    .btn {
      margin-top: 2em;
    }
  }
`;

export default CreateDictionaryWord;
