/* eslint-disable @next/next/no-img-element */
import * as React from "react";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CacheProvider } from "@emotion/react";
import FormControl from "@mui/material/FormControl";
import { ListItemText } from "@mui/material";
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
}

const FactorDropDown: React.FC<Props> = ({
  value,
  setValue,
  title,
  items,
  border,
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
          <FormControl size="small" sx={{ minWidth: "100%", fontSize: 5 }}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select-label"
              value={value}
              onChange={handleChange}
              label={value}
              size="small"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {items?.map((item, index) => (
                <MenuItem
                  className="dropdown__item"
                  key={index}
                  value={item}
                  sx={{
                    borderBottom: "1px solid rgba(0,0,0,0.25)",
                    padding: "1em",
                    "&:last-child, &:last-child": { borderBottom: 0 },
                  }}
                >
                  <ListItemText primary={item} sx={{ fontSize: 5 }} />
                  <div className="dropdown__item-details">
                    <img src="img/icons/gPlus.svg" alt="add" />
                    <span
                      style={{
                        color: "#03ab00",
                        marginRight: "8px",
                        fontSize: " 10px",
                      }}
                    >
                      افزودن
                    </span>
                  </div>
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
  width: 100%;
  #demo-simple-select-label {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
  fieldset {
    display: ${(props) => (props.border ? "inline-flex" : "none")};
  }
  .dropdown__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #000;
  }
  #demo-simple-select-label {
    .dropdown__item-details {
      display: none;
      opacity: 0;
    }
  }
`;

export default FactorDropDown;
