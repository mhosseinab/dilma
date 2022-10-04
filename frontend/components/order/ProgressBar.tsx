import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";

const ProgressBar = () => {
  const [scrollY, setScrollY] = React.useState(0);

  const { order, documents } = useSelector((state: RootStateOrAny) => state);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);
  return (
    <Container level={order?.progress}>
      <div className={`progress__container ${scrollY > 280 && "scroll"}`}>
        <div className="scroll__content">
          <div className="progress">
            <div className="progress__percentage"></div>
            <div className="progress__levels">
              <span>مرحله اول</span>
              <span>مرحله دوم</span>
              <span>مرحله سوم</span>
              <span>مرحله چهارم</span>
            </div>
          </div>
          <span className="mobile__percentage">{order?.progress}%</span>
          <button>قیمت : {+order.price + +order.delivaryPrice} تومان</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ level: number }>`
  margin: 6em 0;
  .progress__container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 16px;
    .scroll__content {
      width: 100%;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      button {
        width: 241px;
        height: 60px;
        background: #03ab00;
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
        border-radius: 11px;
        color: #fff;
      }
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
          width: ${(props) => props.level}%;
          height: 100%;
          max-width: 100%;
        }
        .progress__levels {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          top: 2em;
          right: 0;
          * {
            font-weight: 400;
            font-size: 13px;
          }
        }
      }
    }
  }
  .scroll {
    transition: all ease 0.3s;
    position: fixed;
    top: 2em;
    right: 0;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    z-index: 1000;
    .scroll__content {
      align-self: center;
      justify-self: center;
      max-width: 1024px;
      width: 75%;
      padding: 0 2em;
      background-color: #fff;
      box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.52);
      border-radius: 11px;
    }
  }
  .mobile__percentage {
    display: none;

  }
  @media screen and (max-width: 724px) {
    .scroll {
      height: 20px!important;
      margin-top: 4em;
    }
    button,
    .progress__levels {
      display: none !important;
    }
    .mobile__percentage {
      display: inline;
    }
  }
`;

export default ProgressBar;
