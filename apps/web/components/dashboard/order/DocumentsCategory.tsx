import React from "react";
import styled from "styled-components";

const DocumentsCategory = () => {
  const [currentDoc, setCurrentDoc] = React.useState("");
  const [currentDocument, setCurrentDocument] = React.useState("");
  const [docs, setDocs] = React.useState(documents);

  const handleSearch = (e: any) => {
    setDocs(e.target.value);
    const matches = documents.filter((value) => value.includes(e.target.value));
    setDocs(matches);
  };

  return (
    <Container>
      <div className="docs">
        <h6>نوع سند شما چیست؟</h6>
        <div className="docs__type">
          {docsType.map((item, index) => (
            <span
              key={index}
              onClick={() => setCurrentDoc(item)}
              className={`doc__type  ${currentDoc === item && "active"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="documents">
        <h6>به دنبال کدام سند هستید؟</h6>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="نام سند مد نظر خود را جستجو کنید."
        />
        <div className="documents__type">
          {docs.map((item, index) => (
            <span
              key={index}
              onClick={() => setCurrentDocument(item)}
              className={`document  ${currentDocument === item && "active"}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .docs {
    padding: 2em 0;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 1em;
    h6 {
      margin-bottom: 1em;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    }
  }
  .docs__type {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2em;
    flex-wrap: wrap;
    .doc__type {
      background: #e7e7e7;
      border-radius: 5px;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      padding: 0.5em 1em;
      position: relative;
      cursor: pointer;
      /* &::after {
        content: "";
        position: absolute;
        height: 80%;
        width: 1px;
        background-color: #e7e7e7;
        left: -16px;
        top: 0;
      } */
      &:last-of-type {
        &::after {
          width: 0;
        }
      }
    }
  }
  .active {
    border: 1px solid #000000;
  }
  .documents {
    h6 {
      color: rgba(0, 0, 0, 0.5);
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    }
    input {
      border: 0;
      outline: none;
      box-shadow: none;
      width: 100%;
      padding: 0.8em 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    }
  }
  .documents__type {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1em;
    margin: 2em 0;
    .document {
      background: #e7e7e7;
      border-radius: 5px;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      padding: 0.5em 1em;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      cursor: pointer;

      /* &::after {
        content: "";
        position: absolute;
        height: 80%;
        width: 1px;
        background-color: #e7e7e7;
        left: -8px;
        top: 0;
      } */
      &:last-of-type {
        &::after {
          width: 0;
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .documents__type {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 460px) {
    .documents__type {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const docsType = [
  "شناسنامه",
  "مدرک دیپلم",
  "مدرک سیکل",
  "ویزا شنگن",
  "ویزای تحصیلی",
];
const documents = [
  "شناسنامه",
  "مدرک دیپلم",
  "مدرک سیکل",
  "ویزا شنگن",
  "ویزای تحصیلی",
  "متن",
  "متن",
  "متن",
  "متن",
  "متن",
];
export default DocumentsCategory;
