import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  dec: string;
}

const ContentQaItem: FC<Props> = ({ title, dec }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <div onClick={() => setShow(!show)} className={`title`}>
        <div className={`${show ? "line " : "plus"}`} />
        <h3>{title}</h3>
      </div>
      <p className={`${show ? "active" : "hide"}`}>
        <span className="point" /> {dec}
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin: 2em 0;
  .title {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: flex-start;
    cursor: pointer;
    user-select: none;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  p {
    margin: 2em;
    color: #7b808c;
  }
  span {
    width: 8px;
    height: 8px;
    margin: 0 5px;
    background: #c9cbd1;
    border-radius: 1px;
    display: inline-block;
  }
  .line,
  .plus {
    border: 1.5px solid #2f3136;
    border-radius: 5px;
    min-width: 20px;
    min-height: 20px;
    position: relative;
    display: flex;
  }
  .line::after {
    content: "";
    background-color: #130f26;
    width: 10px;
    position: absolute;
    top: 8px;
    left: 4px;
    height: 2px;
  }
  .plus::after {
    content: "";
    background-color: #130f26;
    width: 10px;
    position: absolute;
    top: 8px;
    left: 4px;
    height: 2px;
  }
  .plus::before {
    content: "";
    background-color: #130f26;
    width: 2px;
    position: absolute;
    top: 4px;
    left: 8px;
    height: 10px;
  }
`;

export default ContentQaItem;
