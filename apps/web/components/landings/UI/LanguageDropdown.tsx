import * as React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CacheProvider } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
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
  extraValue?: string;
  bg?: string;
  color?: string;
}

const LanguageDropdown: React.FC<Props> = ({
  value,
  setValue,
  title,
  items,
  border,
  extraValue,
  bg,
  color,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  React.useEffect(() => {
    setValue(items[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Container border={border} className={`${border && "border"}`}>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={value}
              onChange={handleChange}
              label={title}
              sx={{
                background: `${bg ? bg : "#f79624"}`,
                color: `${color ? color : "#fff"}`,
              }}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {items.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {extraValue} {item}
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
  #demo-simple-select-autowidth {
    /* background: #f79624; */

    /* color: #fff !important; */
  }
  fieldset {
    display: ${(props) => (props.border ? "inline-flex" : "none")};
  }
`;

export default LanguageDropdown;
