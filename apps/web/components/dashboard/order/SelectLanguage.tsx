import DropDown from "components/dashboard/UI/DropDown";
import React, { FC } from "react";
import styled from "styled-components";
import Image from "next/image";
import { NextPage } from "next";
interface Props {
  setLevel: (event: number) => void;
}

const SelectTranslateLang: NextPage<Props> = ({ setLevel }) => {
  const [primaryTranslate, setPrimaryTranslate] = React.useState(
    translateLangs[0]
  );
  return (
    <Container>
      <div className="select">
        {/* <ProgressBar width="10" /> */}
        <p>زبان های ترجمه خود را انتخاب کنید یا از بین زبان‌ها جستجو کنید.</p>
        <div className="primary">
          <span>از</span>
          {/* items and data in the bottom */}
          <DropDown
            setValue={setPrimaryTranslate}
            value={primaryTranslate}
            items={translateLangs}
          />
          <input placeholder="زبان خود را جستجو کنید." type="text" />
        </div>
        <div className="langs">
          <div className="primaryLangs">
            {translateLangs.map((item) => (
              <span
                onClick={() => setPrimaryTranslate(item)}
                className="lang"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="chevron">
            <Image src="/img/icons/chevron.svg" layout="fill" alt="" />
          </div>
          <div className="translate__to">
            <span className="lang">فارسی</span>
          </div>
        </div>
        <button onClick={() => setLevel(2)} className="next">
          مرحله بعد
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  height: 100%;
  margin: 2em 0;
  flex: 1;

  .select {
    display: flex;
    flex-direction: column;
    width: 100%;
    .langs {
      display: flex;
      margin-top: 2em;
      justify-content: space-between;
      .primaryLangs {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        gap: 1em;
      }
      .lang {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 63px;
        height: 26px;
        background: #e7e7e7;
        border-radius: 5px;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        cursor: pointer;
      }
    }
    .chevron {
      position: relative;
      width: 19px;
      height: 31px;
    }
    .next {
      background: #03ab00;
      color: #fff;
      padding: 0.5em 2em;
      border-radius: 7px;
      align-self: flex-end;
    }
  }
  .primary {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-top: 4em;
    input {
      height: 38px;
      border: 0.25px solid rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      outline: none;
      padding: 0 0.5em;
    }
  }
  .MuiSelect-select {
    background-color: #f79624;

    color: #fff !important;
  }
  .MuiSelect-icon {
    color: #fff !important;
  }
  @media screen and (max-width: 800px) {
    .translate__to,
    .chevron {
      display: none;
    }
    .langs {
      width: 100%;
    }
  }
`;

const translateLangs = ["انگلیسی", "آلمانی", "فرانسوی", "اتریشی"];

export default SelectTranslateLang;
