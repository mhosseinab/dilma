import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { createTheme } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "styled-components";

interface Column {
  id:
    | "number"
    | "reqDate"
    | "type"
    | "paperCounter"
    | "wordsLength"
    | "quality"
    | "price"
    | "timing"
    | "endLevel"
    | "status"
    | "by"
    | "initialCode"
    | "works";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface Props {
  columns: {
    id: string;
    label: string;
  }[];
  rows: {
    results: {
      id: string;
      label: string;
      price?: string;
    }[];
  }[];
}

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const AdminTable: React.FC<Props> = ({ columns, rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Paper
          sx={{
            overflow: "hidden",
          }}
        >
          <TableContainer sx={{ maxHeight: 440}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead sx={{ minHeight: 50, overflow: "hidden" }}>
                <TableRow>
                  {columns?.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
                      sx={{
                        fontSize: 12,
                        fontWeight: 900,
                        border: "1px solid #ccc",
                        margin: "auto",
                        padding: 1,
                        background: "#dfdfdf",
                        minWidth: 125,
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows?.map(({ results }, index) => (
                  <TableRow
                    sx={{
                      ":nth-of-type(odd)": { background: "#f1f1f1" },
                      minHeight: 40,
                      maxHeight: 40,
                      overflow: "hidden",
                    }}
                    key={index}
                  >
                    {results.map((result) => (
                      <TableCell
                        sx={{
                          minWidth: 125,
                          fontSize: 12,
                          padding: 1,
                          color: result.label === "پلاس" ? "red" : "auto",
                        }}
                        key={result.id}
                        align="center"
                      >
                        {result.label}
                        <span style={{ color: "green", marginRight: 2 }}>
                          {result?.price ? `(کلمەای ${result.price})` : ""}
                        </span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div dir="ltr">
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={rows?.length ? rows?.length : 1}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelRowsPerPage="تعداد ایتم های هر صفحه"
            />
          </div>
        </Paper>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default AdminTable;
