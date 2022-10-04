import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  dec: string;
}

const QA: FC<Props> = ({ title, dec }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Container>
      <div
        onClick={() => setShow(!show)}
        className={`title ${show && "rotate"}`}
      >
        <h3>{title}</h3>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99999 5.17217L11.95 0.222168L13.364 1.63617L6.99999 8.00017L0.635986 1.63617L2.04999 0.222168L6.99999 5.17217Z"
            fill="black"
          />
        </svg>
      </div>
      <p className={`${show ? "active" : "hide"}`}>{dec}</p>
    </Container>
  );
};

const Container = styled.div`
  margin: 2em 0;
  .title {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: space-between;
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
  }
  .rotate {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export default QA;
