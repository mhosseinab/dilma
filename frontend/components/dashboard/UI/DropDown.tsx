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
  width?: number;
  bg?: string;
}

const SelectAutoWidth: React.FC<Props> = ({
  value,
  setValue,
  title,
  items,
  border,
  width,
  bg
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Container border={border} className={`${border && "border"}`}>
          <FormControl size="small" sx={{ minWidth: width ? width : 120 , background : bg ? bg : "transparent" }}>
            {title && <InputLabel id="demo-select-small">{title}</InputLabel>}
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={value}
              onChange={handleChange}
              label={title}
              sx={{}}
              size="small"
            >
              {items?.map((item, index) => (
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

const Container = styled.div<{ border: boolean | undefined }>`
  fieldset {
    display: ${(props) => (props.border ? "inline-flex" : "none")};
  }
`;

export default SelectAutoWidth;
