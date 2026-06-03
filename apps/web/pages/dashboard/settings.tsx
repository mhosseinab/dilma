import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import LayOut from "components/dashboard/UI/LayOut";
import React from "react";
import styled from "styled-components";

const Settings = () => {
  return (
    <LayOut>
      <SettingsContainer>
        <h3>تنظیمات اطلاع رسانی</h3>
        <div className="setting__actions" dir="ltr">
          <FormGroup dir="ltr">
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="مورد اول"
            />
            <FormControlLabel control={<Switch />} label="مورد دوم" />
          </FormGroup>
        </div>
      </SettingsContainer>
    </LayOut>
  );
};

const SettingsContainer = styled.div`
  .setting__actions {
    margin-top: 64px;
    width: 100%;
  }

  .css-j204z7-MuiFormControlLabel-root {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
    &:last-of-type {
      border-bottom: none;
    }
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    span {
      user-select: none;
    }
  }
`;

export default Settings;
