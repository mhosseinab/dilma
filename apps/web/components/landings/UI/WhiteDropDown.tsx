import * as React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CacheProvider } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import styled from "styled-components";
import { height } from "@mui/system";

const theme = createTheme({
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
interface Props {
  title?: string;
  value: string;
  setValue: (event: string) => void;
  items: string[];
  border?: any;
  color?: string;
  placeholder?: string;
  bg?: string;
  width?: number;
  height?: "small" | "medium" | undefined;
}

const WhiteDropDown: React.FC<Props> = ({
  value,
  setValue,
  title,
  items,
  border,
  color,
  placeholder,
  bg,
  width,
  height
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Container
          border={border}
          color={color}
          placeholder={placeholder}
          className={`${border && "border"}`}
        >
          <FormControl size={height ? height : "medium"} sx={{ minWidth: width ? width : 263  }}>
            {title && (
              <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            )}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={value}
              onChange={handleChange}
              label={title}
              size={height ? height : "medium"}
              sx={{ background: bg ? bg : "transprent" }}
            >
              {items.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

const Container = styled.div<{
  border: boolean | undefined;
  color: string | undefined;
  placeholder: string | undefined;
}>`
  z-index: 1000;
  fieldset {
    display: ${(props) => (props.border ? "inline-flex" : "none")};
    border-color: #fff;
  }
  * {
    color: ${(props) => (props.color ? props.color : "#fff")} !important;
  }
  .Mui-focused,
  .MuiFormLabel-filled {
    color: ${(props) => (props.placeholder ? "#000" : "auto")} !important;
  }
`;

export default WhiteDropDown;
