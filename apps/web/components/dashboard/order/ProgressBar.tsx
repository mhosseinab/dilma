import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  width: string;
}

const ProgressBar: FC<Props> = ({ width }) => {
  return (
    <Container width={width}>
      <div className="progress__container">
        <div className="progress">
          <div className="progress__percentage"></div>
        </div>
        <span className="mobile__percentage">{width}٪</span>
      </div>
    </Container>
  );
};

const Container = styled.div<{ width: string }>`
  margin: 2em 0;

  .progress__container {
    position: relative;
    height: 60px;
    padding: 0 1em;
    display: flex;
    align-items: center;
    gap: 16px;
    .progress {
      position: relative;
      background: rgba(247, 150, 36, 0.2);
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
      border-radius: 11px;
      width: 100%;
      height: 16px;
      .progress__percentage {
        position: absolute;
        background: #ff8a00;
        box-shadow: 0px 0px 36px rgba(0, 0, 0, 0.1);
        border-radius: 11px;
        width: ${(props) => props.width}%;
        height: 100%;
      }
    }
  }
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
  border-radius: 11px;
  @media screen and (max-width: 724px) {
  }
`;

export default ProgressBar;
