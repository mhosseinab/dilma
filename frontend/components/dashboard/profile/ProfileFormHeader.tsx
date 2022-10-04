import * as React from "react";

import Image from "next/image";
import profileImg from "public/img/profileImg.png";
import styled from "styled-components";

const ProfileFormHeader = () => {
  return (
    <Container>
      <div className="form__header">
        <div className="form__headerImg">
          <Image src={profileImg} layout="fill" alt="" />
          <div className="form__change">
            <Image
              src={"/img/icons/write.svg"}
              alt="write logo"
              width={9}
              height={9}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .form__header {
    width: 368px;
    height: 108px;
    background: #f79624;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 11px;
    position: relative;

    .form__headerImg {
      position: absolute;
      width: 175px;
      height: 175px;
      left: calc(50% - 87.5px);
      top: -32px;
      border-radius: 50%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      .form__change {
        width: 26px;
        height: 26px;
        background: #ffffff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 4px 20px;
        z-index: 100;
      }
    }
  }
  @media screen and (max-width: 624px) {
    .form__header {
      width: 294px;
    }
  }
`;
export default ProfileFormHeader;
