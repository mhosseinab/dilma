import "react-toastify/dist/ReactToastify.css";

import * as ActionCreators from "redux/ActionCreators";

import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import { bindActionCreators } from "redux";
import styled from "styled-components";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Layout from "components/superUser/Layout";

const Profile: FC = () => {
  const { userProfile } = useSelector((state): RootStateOrAny => state);
  let data = userProfile.name;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: "onBlur",
    defaultValues: data,
  });
  const onSubmit: SubmitHandler<any> = (data) => console.log("run");

  const dispatch = useDispatch();

  const { setUserProfile } = bindActionCreators(ActionCreators, dispatch);

  const saveProfileHandler = (event: { preventDefault: () => void }) => {
    // setUserProfile(watch());
    toast.success("اطلاعات با موفقیت ذخیره شد");
  };

  return (
    <Layout>
      <Container>
        <ToastContainer />
        <form className="wrapper">
          {/* password */}
            <label
              className={`${errors?.oldPasswoerd?.message && "error"}`}
              htmlFor=""
            >
              رمز عبور قبلی
              <input
                type="oldPasswoerd"
                {...register("oldPasswoerd", {
                  required: "این فیلد اجباری است*",
                  minLength: {
                    value: 8,
                    message: "حداقل تعداد کاراکتر باید 8 عدد باشد",
                  },
                })}
              />
              <p>{errors?.oldPasswoerd?.message}</p>
            </label>
            {/* new password */}
            <label
              className={`${errors?.newPassword?.message && "error"}`}
              htmlFor=""
            >
              رمز عبور قبلی
              <input
                type="newPassword"
                {...register("newPassword", {
                  required: "این فیلد اجباری است*",
                  minLength: {
                    value: 8,
                    message: "حداقل تعداد کاراکتر باید 8 عدد باشد",
                  },
                })}
              />
              <p>{errors?.newPassword?.message}</p>
            </label>
            {/* repeat new password */}
            <label
              className={`${errors?.confirmNewPassword?.message && "error"}`}
              htmlFor=""
            >
              تکرار رمز عبور جدید
              <input
                type="password"
                {...register("confirmNewPassword", {
                  required: "این فیلد اجباری است*",
                  minLength: {
                    value: 8,
                    message: "حداقل تعداد کاراکتر باید 8 عدد باشد",
                  },
                  validate: (val: string) => {
                    if (watch("newPassword") != val) {
                      return "رمز عبور و تکرار آن یکسان نیست";
                    }
                  },
                })}
              />
              <p>{errors?.confirmNewPassword?.message}</p>
            </label>
         
          <button onClick={handleSubmit(saveProfileHandler)} className="btn">
            ثبت تغییر
          </button>
        </form>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin-top: 4em;
  max-width: 368px;
  width: 368px;
  margin: 4em auto;
  .wrapper {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 22px;
  }
  .Inputs {
    display: flex;
    justify-content: space-between;
    width: 100%;
    label,
    input {
      width: 150px;
    }
  }
  input,
  textarea {
    width: 100%;
    height: 38px;
    background: #ffffff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 1em;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
  }
  textarea {
    height: auto;
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: right;
    color: #000000;
    input,
    textarea {
      margin-top: 4px;
    }
    p {
      color: red;
      font-size: 12px;
      margin-top: 6px;
    }
  }
  .error {
    input,
    textarea {
      border: 1px solid red !important;
    }
  }
  .btn {
    background: #305c7e;
    border-radius: 3px;
    color: #ffffff;
    width: fit-content;
    padding: 0 3em;
    height: 50px;
    align-self: flex-end;
  }
  @media screen and (max-width: 624px) {
    width: 294px;
    .Inputs {
      width: 100%;
      label {
        width: 139px;
        input {
          width: 100%;
        }
      }
    }
    .btn {
      align-self: center;
    }
  }
`;

export default Profile;
