import LandingLayout from "components/landings/LadingLayout";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { verifyCode } from "redux/ActionCreators";
import Cookies from "js-cookie";

const VerifyCode: NextPage = () => {
  const { loginCode, wrongCode } = useSelector(
    (state): RootStateOrAny => state
  );

  const [code, setCode] = React.useState("");

  const router = useRouter();
  const dispatch = useDispatch();
  const loginHandler = () => {
    if (code == "" || code.length < 3) {
      toast.error("کد وارد شده کوتاه است");
      return;
    } else {
      dispatch(verifyCode(Cookies.get("uuid") || "", code));
    }
    if (wrongCode?.message) {
      toast.error(wrongCode?.message)
      return
    }
  };

  if (Cookies.get("access")) {
    Cookies.remove("uuid");
    router.push("/dashboard");
  }

  return (
    <LandingLayout>
      <ToastContainer />
      <Container>
        <div className="card">
          <h4>ورود/ثبت نام</h4>
          <p>خوش اومدین! برای ترجمه‌هاتون همینجا هستیم</p>
          <button onClick={loginHandler} className="google">
            ورود/ثبت نام با گوگل
            <Image
              src="/img/icons/google.svg"
              alt="google"
              width={20}
              height={20}
            />
          </button>
          <input
            placeholder="کد ارسال شده را وارد کنید."
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
          />
          <button onClick={loginHandler} className="submit">
            تایید و ورود
          </button>
        </div>
        <div className="img">
          <Image src="/img/login-bg.png" alt="bg" layout="fill" />
        </div>
      </Container>
    </LandingLayout>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4em 0;
  .card {
    width: 429px;
    height: 537px;
    display: flex;
    align-items: flex-start;
    gap: 1em;
    padding: 0 3em;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    box-shadow: 0px 0px 33px 5px rgba(0, 0, 0, 0.3);
    .google {
      background: #305c7e;
      border-radius: 3px;
      color: #ffffff;
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    input {
      height: 31px;
      border: 0.25px solid rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      width: 100%;
      padding: 0 1em;
      outline: none;
    }
    .submit {
      height: 30px;
      background: #03ab00;
      border-radius: 3px;
      width: 125px;
      color: #ffffff;
      align-self: flex-end;
    }
  }
  .img {
    width: 535px;
    height: 356px;
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    .img {
      display: none;
    }
  }
`;

export default VerifyCode;
