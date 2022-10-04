import React, { FC } from "react";

import documents from "lib/docs.json";
import styled from "styled-components";

interface Props {}

const DocumentOrders: FC<Props> = () => {
  const [currentCategory, setCurrentCategory] = React.useState(1);
  const [currentDoc, setCurrentDoc] = React.useState("");
  const [docs, setDocs] = React.useState(documents);
  const handleSearch = (e: any) => {
    setDocs(e.target.value);
    const matches = documents.filter((value) =>
      value.name.includes(e.target.value)
    );
    setDocs(matches);
  };
  return (
    <Container>
      <div className="category">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="نام سند مد نظر خود را جستجو کنید یا از دسته بندی های روبرو یک مورد را انتخاب کنید."
        />
        <div className="types">
          <span
            className={`${currentCategory === 1 && "active"}`}
            onClick={() => setCurrentCategory(1)}
          >
            تحصیلی
          </span>
          <span
            className={`${currentCategory === 2 && "active"}`}
            onClick={() => setCurrentCategory(2)}
          >
            مهاجرتی
          </span>
          <span
            className={`${currentCategory === 3 && "active"}`}
            onClick={() => setCurrentCategory(3)}
          >
            اداری
          </span>
        </div>
      </div>
      <div className="docs">
        {docs.map((doc, index) => (
          <div
            key={index}
            className={`doc doc-${index + 1} ${
              currentDoc === doc.name && "active"
            }`}
            onClick={() => setCurrentDoc(doc.name)}
          >
            <span>{doc.name}</span>
            <small>{doc.price} تومان</small>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .category {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    min-height: 40px;
    gap: 2em;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    padding: 2em 0;
    input {
      flex: 1;
      border: none;
      outline: none;
      padding: 0.4em 1em;
      box-shadow: none;
      &::placeholder {
        font-size: 10px;
      }
    }
  }
  .types {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 100px;
      height: 35px;
      background: #e7e7e7;
      border-radius: 5px;
      cursor: pointer;
      transition: all ease 0.3s;
      position: relative;
    }
    .active {
      background: #03ab00;
      border-radius: 61px;
      color: #fff;
      &::after {
        content: "";
        position: absolute;
        bottom: -14px;
        left: calc(50% - 10px);
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;

        border-top: 15px solid #03ab00;
      }
    }
  }
  .docs {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2em;
    margin: 2em 0;
    .doc {
      padding: 0.2em;
      min-width: 93px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #e7e7e7;
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        height: 80%;
        width: 1px;
        background-color: #e7e7e7;
        left: -16px;
        top: 0;
      }
      &:last-of-type {
        &:after {
          content: "";
          width: 0;
        }
      }
      span {
        font-weight: 400;
        font-size: 14px;
      }
      small {
        font-weight: 400;
        font-size: 12px;
      }
    }
    .doc-4,
    .doc-8,
    .doc-12,
    .doc-16,
    .doc-20,
    .doc-24 {
      &::after {
        content: "";
        display: none !important;
        width: 0;
      }
    }
    .active {
      border: 1px solid #000;
    }
  }
`;

export default DocumentOrders;
