/* eslint-disable @next/next/no-img-element */
import React, { FC } from "react";
import documentItems from "lib/documentsItems.json";
import styled from "styled-components";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";

interface Props {
  docTypes: {
    id: string;
    name: string;
    type: number;
    unit: number;
    base_price: number;
    stamp_option: number;
    pickup_option: number;
    stamp_moj_price: number;
    stamp_mfa_price: number;
  }[];
}

const Documents: FC<Props> = ({ docTypes }) => {
  const [search, setSearch] = React.useState("");
  const [docs, setDocs] = React.useState(documentItems);
  const [currentDoc, setCurrentDoc] = React.useState<{
    name: string;
    price: number;
    id: string;
  }>();

  const { documents } = useSelector((state: RootStateOrAny) => state);

  const handleSearch = async (e: any) => {
    setSearch(e.target.value);
    const matches = await documentItems.filter((value) =>
      value.title.includes(e.target.value)
    );
    setDocs(matches);
  };
  const dispatch = useDispatch();

  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);

  const setOrderHandler = (value: any) => {
    setCurrentDoc(value);
    setOrderDetails({
      name: "doc",
      data: {
        title: value.name,
        price: value.base_price,
        id: value.id,
        docCount: 1,
        pageCount: 1,
        stamps: {
          stamp_mfa: { price: value.stamp_mfa_price, checked: false },
          stamp_moj: { price: value.stamp_moj_price, checked: false },
        },
      },
    });
  };
  return (
    <Container>
      <div className="bullet" />
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        className="search"
        placeholder="نام سند مورد نظر را جستوجو کنید"
      />
      <ul>
        {docTypes.map((item: any, index) => (
          <li
            className={`${
              documents.filter((e: { id: string }) => e.id === item.id).length >
                0 && "active"
            }`}
            key={index}
            onClick={() => setOrderHandler(item)}
          >
            <span>
              <img
                src={`img/icons/${
                  documents.filter((e: { id: string }) => e.id === item.id)
                    .length > 0
                    ? "gPlus.svg"
                    : "yPlus.svg"
                }`}
                alt="+"
              />
            </span>
            {item.name} | {item.base_price}
            تومان
          </li>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 300px;
  .search {
    width: 100%;
    box-shadow: none;
    height: 38px;
    border: 0.25px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    margin-bottom: 2em;
    outline: none;
    padding: 0 1em;
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
    list-style: none;
    li {
      background: #ffffff;
      border: 1px solid #c4c4c4;
      border-radius: 42px;
      height: 50px;
      display: flex;
      align-items: center;
      min-width: 200px;
      max-width: 220px;
      cursor: pointer;
      font-size: 12px;

      span {
        height: 100%;
        border-left: 1px solid #c4c4c4;
        padding: 0 22px 0 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 0 0 10px;
      }
    }
  }
  .active {
    background: #f79624 !important;
    color: #fff;
  }
`;

export default Documents;
