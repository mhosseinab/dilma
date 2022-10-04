import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import SelectAutoWidth from "components/dashboard/UI/DropDown";
import RtlTextField from "components/dashboard/UI/RtlTextField";
import React, { useEffect } from "react";
import styled from "styled-components";
import WhiteDropDown from "../UI/WhiteDropDown";

const ContentCalculator = () => {
  const [price, setPrice] = React.useState(40000);
  const [wordsLength, setWordsLength] = React.useState("");
  const [lang, setLang] = React.useState("");
  const [depend, setDepend] = React.useState("");
  const [translate, setTranslate] = React.useState({
    translateType: translateTypes[0],
  });
  return (
    <Container>
      <div className="cards">
        <div className="options">
          <RadioGroup
            sx={{ color: "#fff", zIndex: 1000 }}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            defaultValue="text"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="text"
              control={<Radio />}
              sx={{ fontSize: 200, zIndex: 1000 }}
              label="متنی"
            />
            <FormControlLabel
              value="video"
              control={<Radio />}
              label="ویدیو یا صوت"
            />
          </RadioGroup>
          <RtlTextField
            setValue={(event) => {
              setPrice((+event * 750 + 40000) * +translate.translateType.id),
                setWordsLength(event);
            }}
            title={"تعداد کلمات"}
            value={wordsLength}
            width={"263px"}
            height={"meduim"}
            color="#fff"
          />
          <WhiteDropDown
            items={languages}
            border="#fff"
            setValue={setLang}
            value={lang}
            title="زبان انتخابی"
          />
          <WhiteDropDown
            items={depends}
            border="#fff"
            setValue={setDepend}
            value={depend}
            title="انتخاب زمینه"
          />
          <svg
            className="circle"
            width="180"
            height="305"
            viewBox="0 0 180 305"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              opacity="0.2"
              cx="152.5"
              cy="152.5"
              r="103"
              stroke="white"
              strokeWidth="99"
            />
          </svg>
        </div>
        <div className="price">
          <div className="translate__type-container">
            {translateTypes.map((item) => (
              <div
                className="translate__type"
                onClick={() => {
                  setTranslate({ ...translate, translateType: item }),
                    setPrice(40000 * +item.id + +wordsLength * 750);
                }}
                key={item.id}
              >
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  defaultValue={translateTypes[0].id}
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value={item.id}
                    control={
                      <Radio
                        checked={item.id === translate.translateType.id}
                        color="default"
                      />
                    }
                    sx={{ fontSize: 200 }}
                    label={item.title}
                  />
                </RadioGroup>
              </div>
            ))}
          </div>
          <svg
            className="arrow"
            width="22"
            height="22"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.37189 5.55809L11.4848 5.38773L11.5128 6.72077L3.39988 6.89113L7.05017 10.3913L6.1275 11.3535L0.834446 6.27818L5.90978 0.985134L6.87203 1.9078L3.37189 5.55809Z"
              fill="black"
            />
          </svg>
          <div className="qualities">
            <a href="#"> تحویل ۰۳/۱۱/۱۴۰۰ ساعت ۲۱ </a>
            {translateQuality.map((item) => (
              <div className="quality" key={item.id}>
                <span>{item.title}</span>
                <span>{price} تومان</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 4em 3em;

  .cards {
    min-height: 550px;
    display: flex;
    align-items: center;
    .options {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 2em;
      padding: 2em 1em;
      background: #a40a0a;
      min-width: 312px;
      height: 550px;
      box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
        0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
        0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
        0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
        0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
        0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
      border-radius: 35px;
      .circle {
        position: absolute;
        bottom: 2em;
        right: 0;
      }
      .Mui-checked {
        span {
          svg {
            background-color: #fff;
            color: #fff;
            border-radius: 100%;
            z-index: 1;
          }
        }
      }
    }
    .price {
      height: 505px;
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 22px 217px rgba(0, 0, 0, 0.13),
        0px 11.0107px 108.606px rgba(0, 0, 0, 0.0435433),
        0px 6.63236px 65.4192px rgba(0, 0, 0, 0.0306872),
        0px 4.25036px 41.924px rgba(0, 0, 0, 0.028355),
        0px 2.75474px 27.1718px rgba(0, 0, 0, 0.0301503),
        0px 1.73408px 17.1043px rgba(0, 0, 0, 0.0329746),
        0px 0.996336px 9.8275px rgba(0, 0, 0, 0.0341041),
        0px 0.438513px 4.32534px rgba(0, 0, 0, 0.0291046);
      border-radius: 35px 0 0 35px;
    }
  }
  .length {
    label {
      width: fit-content;
    }
    display: flex;
    gap: 0.4em;
    color: #ffffff;
    padding: 0.4em 0.6em;
    border: 2px solid #ffffff;
    border-radius: 7px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    width: 263px;
    input {
      width: 60px;
      background-color: transparent;
      border: none;
      font-size: 20px;
      outline: none;
      box-shadow: none;
      text-align: left;
      color: #ffffff;
    }
  }
  .MuiRadio-colorPrimary {
    color: #ffffff;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* flex-direction: column; */
    .translate__type-container {
      display: flex;
      flex-direction: column;
      gap: 1em;
      .translate__type {
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        width: 263px;
        cursor: pointer;
      }
    }
    .qualities {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1em;
      a {
        width: 312px;
        height: 61px;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        text-decoration: none;
        background: #1972cb;
        box-shadow: 0px 22px 217px rgba(0, 0, 0, 0.13),
          0px 11.0107px 108.606px rgba(0, 0, 0, 0.0435433),
          0px 6.63236px 65.4192px rgba(0, 0, 0, 0.0306872),
          0px 4.25036px 41.924px rgba(0, 0, 0, 0.028355),
          0px 2.75474px 27.1718px rgba(0, 0, 0, 0.0301503),
          0px 1.73408px 17.1043px rgba(0, 0, 0, 0.0329746),
          0px 0.996336px 9.8275px rgba(0, 0, 0, 0.0341041),
          0px 0.438513px 4.32534px rgba(0, 0, 0, 0.0291046);
        border-radius: 35px;
      }
      .quality {
        min-width: 312px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1em;
        box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
          0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
          0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
          0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
          0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
          0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
        border-radius: 8px;
      }
    }
    .Mui-checked {
      span {
        svg {
          background-color: #333;
          color: #333;
          border-radius: 100%;
          z-index: 1;
        }
      }
    }
  }

  @media screen and (max-width: 1100px) {
    .qualities {
      a,
      .quality {
        width: 250px !important;
        min-width: 250px !important;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .cards,
    .price {
      flex-direction: column;
    }
    .price {
      max-width: 265px !important;
      border-radius: 0 0 35px 35px !important;
      padding: 3em 1em;
      height: fit-content !important;
    }
    .qualities {
      a {
        width: 312px !important;
        height: 61px !important;
        margin-bottom: 1em;
      }
    }
    .arrow {
      transform: rotate(270deg) !important;
      margin-top: 2em;
      margin-bottom: 1em;
    }
    .qualities > .quality,
    .translate__type {
      width: 213px !important;
      min-width: 213px !important;
    }
  }
`;

const languages = ["انگلیسی به فارسی", "فارسی به انگلیسی"];
const depends = ["مقاله", "مدرک تحصیلی"];
const translateTypes = [
  { title: "ترجمه عادی", id: "1" },
  { title: "ترجمه نیمه فوری", id: "2" },
  { title: "ترجمه فوری", id: "3" },
];
const translateQuality = [
  { id: "1", title: "معمولی", value: "100,000" },
  { id: "2", title: "خیلی خوب", value: "150,000" },
  { id: "3", title: "خوب", value: "210,000" },
];

export default ContentCalculator;
