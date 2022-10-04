import "react-toastify/dist/ReactToastify.css";

import * as ActionCreators from "redux/ActionCreators";

import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import { bindActionCreators } from "redux";
import styled from "styled-components";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

const ProfileFormInputs: FC = () => {
  const { userProfile } = useSelector((state): RootStateOrAny => state);
  let data = userProfile.name
    ? userProfile
    : {
        name: "محسن",
        family: "خانی",
        email: "mohsen@khani.com",
        phoneNumber: "09120000000",
        address: "تهران خیابان ولیعصر",
        password: "12345678",
        confirmPassword: "12345678",
      };
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
    setUserProfile(watch());
    toast.success("اطلاعات با موفقیت ذخیره شد");
  };

  return (
    <Container>
      <ToastContainer />
      <form className="wrapper">
        <div className="Inputs">
          <label className={`${errors?.name?.message && "error"}`} htmlFor="">
            نام
            <input
              {...register("name", {
                required: "این فیلد اجباری است*",
                minLength: {
                  value: 4,
                  message: "حداقل تعداد کاراکتر باید 4 عدد باشد",
                },
              })}
            />
            <p>{errors?.name?.message}</p>
          </label>
          <label className={`${errors?.family?.message && "error"}`} htmlFor="">
            نام خانوادگی
            <input
              {...register("family", {
                required: "این فیلد اجباری است*",
                minLength: {
                  value: 4,
                  message: "حداقل تعداد کاراکتر باید 4 عدد باشد",
                },
              })}
            />
            <p>{errors?.family?.message}</p>
          </label>
        </div>

        <div className="Inputs">
          <label
            className={`${errors?.password?.message && "error"}`}
            htmlFor=""
          >
            رمز عبور
            <input
              type="password"
              {...register("password", {
                required: "این فیلد اجباری است*",
                minLength: {
                  value: 8,
                  message: "حداقل تعداد کاراکتر باید 8 عدد باشد",
                },
              })}
            />
            <p>{errors?.password?.message}</p>
          </label>
          <label
            className={`${errors?.confirmPassword?.message && "error"}`}
            htmlFor=""
          >
            تکرار رمز عبور
            <input
              type="password"
              {...register("confirmPassword", {
                required: "این فیلد اجباری است*",
                minLength: {
                  value: 8,
                  message: "حداقل تعداد کاراکتر باید 8 عدد باشد",
                },
                validate: (val: string) => {
                  if (watch("password") != val) {
                    return "رمز عبور و تکرار آن یکسان نیست";
                  }
                },
              })}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </label>
        </div>
        <label className={`${errors?.email?.message && "error"}`} htmlFor="">
          ایمیل
          <input
            type="email"
            {...register("email", {
              required: "این فیلد اجباری است*",
              minLength: {
                value: 6,
                message: "حداقل تعداد کاراکتر باید 6 عدد باشد",
              },
            })}
          />
          <p>{errors?.email?.message}</p>
        </label>
        <label
          className={`${errors?.phoneNumber?.message && "error"}`}
          htmlFor=""
        >
          شماره همراه
          <input
            {...register("phoneNumber", {
              required: "این فیلد اجباری است*",
              minLength: {
                value: 10,
                message: "حداقل تعداد کاراکتر باید 10 عدد باشد",
              },
            })}
            type="number"
            style={{ direction: "ltr" }}
          />
          <p>{errors?.phoneNumber?.message}</p>
        </label>
        <label className={`${errors?.address?.message && "error"}`} htmlFor="">
          آدرس
          <textarea
            {...register("address", {
              minLength: {
                value: 10,
                message: "حداقل تعداد کاراکتر باید 10 عدد باشد",
              },
            })}
            rows={5}
          />
          <p>{errors?.address?.message}</p>
        </label>
        <button onClick={handleSubmit(saveProfileHandler)} className="btn">
          ثبت تغیرات
        </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  margin-top: 4em;
  max-width: 368px;
  width: 368px;
  margin: 4em 0;
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
    padding: 0 1em;
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

export default ProfileFormInputs;
