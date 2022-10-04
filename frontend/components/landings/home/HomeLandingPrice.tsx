import React, { useEffect } from "react";
import styled from "styled-components";
import LanguageDropdown from "../UI/LanguageDropdown";

const HomeLandingPrice = () => {
  const [currentService, setCurrentService] = React.useState(services[0]);
  const [primaryLang, setPrimaryLang] = React.useState("");
  const [translateTo, setTranslateTo] = React.useState("");
  const [depends, setDepends] = React.useState("");
  const [price, setPrice] = React.useState<number>(0);
  const [count, setCount] = React.useState<number | null>();

  useEffect(() => {
    if (count) {
      if (count >= 1 && count < 249 && count > 1) {
        setPrice(150000)
      } else if (count > 250) {
        setPrice(250000)
      } else {
        setPrice(0)
        setCount(null)
      }
    }
  }, [count])

  return (
    <Container>
      <h4>محاسبه قیمت</h4>
      <div className="category-mobile">
        <h5>دنبال چه خدمتی هستید ؟</h5>
        <LanguageDropdown
          items={services}
          setValue={setCurrentService}
          value={currentService}
          color="#fff"
          bg="#305C7E"
        />
      </div>
      <div className="category">
        <h5>دنبال چه خدمتی هستید ؟</h5>
        <div className="items">
          {services.map((item, index) => (
            <span
              key={index}
              onClick={() => setCurrentService(item)}
              className={`${currentService === item && "active"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="actions">
        <div className="languages">
          <LanguageDropdown
            items={languages}
            setValue={setPrimaryLang}
            value={primaryLang}
            extraValue={"از"}
          />
          <img
            src="/img/icons/left-chevron.svg"
            alt=""
            width={15}
            height={17}
          />
          <LanguageDropdown
            items={languages}
            setValue={setTranslateTo}
            value={translateTo}
            extraValue={"به"}
            color="#000"
            bg="#E7E7E7"
          />
        </div>
        <div className="depends">
          <small>|</small>
          <LanguageDropdown
            items={depend}
            setValue={setDepends}
            value={depends}
            title=""
            color="#000"
            bg="#E7E7E7"
          />
          <small>|</small>
          <input type="number" value={count ? count : ""} onChange={(event) => setCount(+event.target.value)} placeholder="ترجمه شما چند کلمه است ؟" />
        </div>
      </div>
      <div className="price">
        <p>
          <strong>قیمت کل {+price > 1 ? price : 0} تومان</strong>
        </p>
        <button>
          سفارش ترجمه
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.37189 5.55809L11.4848 5.38773L11.5128 6.72077L3.39988 6.89113L7.05017 10.3913L6.1275 11.3535L0.834446 6.27818L5.90978 0.985134L6.87203 1.9078L3.37189 5.55809Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 5em 0;
  h5 {
    font-weight: 100;
  }
  .category-mobile {
    display: none;
  }
  .category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 2em 0;

    .items {
      display: flex;
      align-items: center;
      gap: 1em;
      span {
        border: 1px solid #000;
        padding: 0.2em 1em;
        border-radius: 3px;
        cursor: pointer;
      }
      .active {
        background: #305c7e;
        color: #fff;
        border: none;
      }
    }
  }
  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .languages {
      display: flex;
      align-items: center;
      gap: 1em;
    }
    .depends {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-right: 3em;
      gap: 1em;
      input {
        border: none;
        background-color: #e7e7e7;
        padding: 0 1em;
        height: 40px;
        box-shadow: none;
        border-radius: 3px;
        outline: none;
      }
    }
  }
  .price {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 2em 0;
    gap: 1em;
    button {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #fff !important;
      background: #03ab00;
      padding: 0.5em 2em;
      border-radius: 3px;
    }
  }
  @media screen and (max-width: 880px) {
    .category {
      display: none;
    }
    .category-mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;
      margin: 2em 0;
    }
    .actions {
      flex-direction: column;
      .depends {
        margin: 2em 0;
        margin-right: 0;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      small {
        display: none;
      }
    }
    .languages {
      justify-content: space-around;
      width: 100%;
    }
  }
`;

const services = [
  "دیکشنری آنلاین",
  "نمونه ترجمه",
  "ترجمه فوری",
  "استخدام مترجم",
  " آزموش ترجمه",
];

const languages = ["عربی", "فارسی", "انگلیسی"];

const depend = ["ترجمه شما در چه زمینه های است ؟"];

export default HomeLandingPrice;
