import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect } from "react";
import * as ActionCreators from "redux/ActionCreators";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";
import TableColumns from "./TableColumns";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Table = () => {
  const { documents } = useSelector((state: RootStateOrAny) => state);

  return (
    <Container>
      <table>
        <tbody>
          <tr className="head">
            <td className="delete"></td>
            <td>نام سند</td>
            <td>تعداد سند</td>
            <td>نوع تحویل</td>
            <td>تعداد صفحه</td>
            <td>تخفیف</td>
            <td>هزینه</td>
            <td>نیاز به مهر</td>
          </tr>
          {documents?.map((doc: any, index: number) => (
            <TableColumns key={index} doc={doc} />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const Container = styled.div`
  margin: 4em 0;
  table {
    width: 100%;
    background: rgba(185, 185, 185, 0.12);
    box-shadow: 0px 0px 28px 5px rgba(185, 185, 185, 0.12);
  }
  tbody {
    width: 100%;
    box-shadow: 0px 0px 28px 5px rgba(185, 185, 185, 0.12);
    position: relative;
  }
  tr {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    height: 38px;
    margin-bottom: 2em;
    position: relative;
    z-index: 10;
    td {
      width: 100%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      button {
        background-color: transparent;
        font-weight: 900;
        font-size: 16px;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }
    }
    &:last-of-type {
      margin-bottom: 0em;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  .head {
    height: 60px;
  }
  .finger {
    height: 96px;
    margin: -1em 0 1em 0 !important;
    display: flex;
    align-items: center;
    gap: 1em;
    font-size: 15px !important;
    margin-right: 1em;
    .stamps {
    }
  }
  .delete {
    position: absolute;
    right: -40px;
    top: 10px;
    text-align: right;
    cursor: pointer;
    justify-content: flex-start;
  }
`;

export default Table;
