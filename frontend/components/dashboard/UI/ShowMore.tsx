import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  date: string;
  status?: string;
  price?: string;
  statusColor?: string;
  link: string;
}

const ShowMore: FC<Props> = ({
  title,
  date,
  status,
  price,
  statusColor,
  link,
}) => {
  const [show, setShow] = React.useState(false);
  return (
    <Container color={statusColor}>
      <div className="header" onClick={() => setShow(!show)}>
        <div className="top">
          <h4>{title}</h4>
          <div className={`${show && "active"}`}>
            <Image
              src={"/img/icons/down-arrow.svg"}
              alt="arrow"
              width={10}
              height={10}
            />
          </div>
        </div>
        <span>{date}</span>
      </div>
      {show && (
        <div className="details">
          {status && (
            <div className="details__header">
              <span>{status}</span>
              {price && (
                <p>{price?.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان </p>
              )}
            </div>
          )}
          <Link href={link} passHref>
            <button>جزییات بیشتر</button>
          </Link>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div<{ statusColor?: string }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 1em;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .header {
    margin-top: 2em;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1em 0;
    }
    user-select: none;
    cursor: pointer;
    .active {
      transition: all ease 0.3s;
      transform: rotate(180deg);
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: right;
      color: #000000;
    }
  }
  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
  }
  .details {
    .details__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1em 0;
      span {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        text-align: right;
        color: ${(prop) => (prop.color === "success" ? "#03AB00" : "#ff8a00")};
      }
      p {
        font-style: normal;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;

        /* identical to box height */
        text-align: right;

        color: #000000;
      }
    }
  }
  button {
    background: #305c7e;
    border-radius: 3px;
    margin: 1.5em 0;
    color: #fff;
    width: 100%;
    height: 50px;
  }
  @media screen and (max-width: 624px) {
    background-color: #f6f6f6;
    border-radius: 7px;
    margin: 1em 0;
    padding: 1em;
  }
`;

export default ShowMore;
