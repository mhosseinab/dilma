import Documents from "./Documents";
import React, { FC, useEffect } from "react";
import styled from "styled-components";
import * as ActionCreators from "redux/ActionCreators";
import { bindActionCreators } from "redux";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

interface Props {
  categories: {
    id: string;
    name: string;
    items: [];
  }[];
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

const Categories: FC<Props> = ({ categories, docTypes }) => {
  const [currentCategory, setCurrentCategory] = React.useState({
    category: "",
    subCategory: "",
  });
  const dispatch = useDispatch();
  const { setOrderDetails } = bindActionCreators(ActionCreators, dispatch);
  const { order } = useSelector((state: RootStateOrAny) => state);

  const setOrderHandler = (value: string, name: string) => {
    setCurrentCategory({
      ...currentCategory,
      [name]: value,
    });
    setOrderDetails({ name, data: value });
  };

  return (
    <Container className="border-right">
      <>
        <div className="bullet" />
        <h5 className="title-border">
          از دسته بندی های زیر یک دسته بندی را انتخاب کنید
        </h5>

        <div className="categories__container">
          {categories?.map((item, index) => (
            <div className="category" key={index}>
              <button
                onClick={() => setOrderHandler(item.id, "category")}
                className={`${
                  currentCategory.category === item.id && "active"
                }`}
              >
                {item.name}
                {currentCategory.category === item.id && (
                  <div className="arrow-down-orange" />
                )}
              </button>
              {currentCategory.category === item.id && (
                <div className="categories__items">
                  {docTypes.map((cate, index) => (
                    <button
                      onClick={() => setOrderHandler(cate.name, "subCategory")}
                      key={index}
                      className={`${
                        order.subCategory === cate.name && "active"
                      }`}
                    >
                      {cate.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </>
      <Documents docTypes={docTypes} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  font-size: 20px;
  height: calc(100% + 100px);
  width: 100%;
  .categories__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.5em;
    position: relative;
    margin-bottom: 3em;

    .categories__items {
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: 1em;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
      button {
        background: #fff;
        border: 1px dashed #000000;
        border-radius: 42px;
        padding: 1em;
        font-size: 14px;
      }
    }
    button {
      position: relative;
      background: #e7e7e7;
      min-width: 120px;
      text-align: center;
      display: inline-block;
      border-radius: 5px;
      padding: 0.7em 0;
      font-size: 16px;
    }
    .active {
      background: #f79624 !important;
      color: #fff;
    }
  }
  @media screen and (max-width: 724px) {
    h5 {
      font-size: 12px;
    }
    button {
      font-size: 10px !important;
    }
    .categories__items {
      button {
        font-size: 8px !important;
      }
    }
  }
`;

export default Categories;
