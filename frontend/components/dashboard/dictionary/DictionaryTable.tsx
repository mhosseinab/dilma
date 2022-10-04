import * as React from "react";

import { RootStateOrAny, useSelector } from "react-redux";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";

const DictionaryTable = () => {
  const { translates } = useSelector((state: RootStateOrAny) => state);
  return (
    <Container>
      <TableContainer>
        <Table
          sx={{ minWidth: 650, textAlign: "right" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontWeight: 700, textAlign: "right", fontSize: 16 }}
              >
                کلمه
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, textAlign: "right", fontSize: 16 }}
                align="right"
              >
                زبان
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, textAlign: "right", fontSize: 16 }}
                align="right"
              >
                زمینه واژه
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, textAlign: "right", fontSize: 16 }}
                align="right"
              >
                واژه
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, textAlign: "right", fontSize: 16 }}
                align="right"
              >
                معنی
              </TableCell>
              <TableCell
                sx={{ fontWeight: 700, textAlign: "right", fontSize: 16 }}
                align="right"
              >
                وضعیت
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {translates?.map((row: any) => (
              <TableRow
                key={row?.word}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="right">
                  {row?.word}
                </TableCell>
                <TableCell align="right">{row?.primaryWord}</TableCell>
                <TableCell align="right">{row?.wordDepends}</TableCell>
                <TableCell align="right">{row?.primaryTranslate}</TableCell>
                <TableCell align="right">{row?.primaryTranslateTo}</TableCell>
                <TableCell align="right">{row?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2em;
  * {
    text-align: right;
  }
`;

export default DictionaryTable;
