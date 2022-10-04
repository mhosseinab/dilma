import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import styled from "styled-components";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

interface Props {
  value: string;
  setValue: (event: string) => void;
  title: string;
  width?: string;
  color?: string;
  height?: string;
}

const RtlTextField: React.FC<Props> = ({
  value,
  setValue,
  title,
  width,
  color,
  height,
}) => {
  return (
    <Container color={color}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              value={value}
              onChange={(e) => setValue(e.target.value)}
              label={title}
              id="outlined-basic"
              variant="outlined"
              size={height ? "medium" : "small"}
              sx={{ width: width ? width : "auto" }}
            />
          </Box>
        </ThemeProvider>
      </CacheProvider>
    </Container>
  );
};

const Container = styled.div<{
  border?: boolean | undefined;
  color: string | undefined;
}>`
  z-index: 1000;
  fieldset,
  .MuiOutlinedInput-notchedOutline {
    display: ${(props) => (props.color ? "inline-flex" : "none")};
    border-color: #fff !important;
  }
  * {
    color: ${(props) => (props.color ? props.color : "#fff")} !important;
  }
  .Mui-focused,
  .MuiFormLabel-filled {
    color: ${(props) => (props.placeholder ? "#000" : "auto")} !important;
  }
`;

export default RtlTextField;
