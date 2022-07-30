import { useRouter } from "next/router";
import React, { useState } from "react";
import { FormContainer } from "./styled";
import Link from "next/link";
interface Props {
  formTitle: string;
  handle?: React.MouseEventHandler;
  handleResend?: React.MouseEventHandler;
  otp?: boolean;
  handlechange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  subTitle: string;
  selectCategory: boolean;
  formInputs: {
    label?: string;
    placeholder?: string;
    type?: string;
    name?: string;
    selector?: boolean;
    sideBySideInput?: {
      label: string;
      placeholder: string;
      type: string;
      name: string;
    }[];
  }[];
  NextPrevBtn?: boolean;
  nextPrevSided?: boolean;
  nextBtn?: string;
  link?: any;
}
const FormReg = ({
  handle,
  handleResend,
  formTitle,
  subTitle,
  formInputs,
  selectCategory,
  handlechange,
  NextPrevBtn,
  nextPrevSided,
  nextBtn,
  link,
  otp,
}: Props) => {
  const router = useRouter();
  return (
    <FormContainer>
      <div className="header">
        <h2>{formTitle}</h2>
        <p>{subTitle}</p>
      </div>
      {selectCategory === true ? (
        <div className="category">
          <p>Select the category that best describes you</p>
          <div className="categorySelect">
            <Link href="/register/individual">
              <a
                className={
                  router.asPath === "/register/individual" ? "active" : ""
                }
              >
                Individual
              </a>
            </Link>
            <Link href="/register/corporate">
              <a
                className={
                  router.asPath === "/register/corporate" ? "active" : ""
                }
              >
                Corporate
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
      {formInputs.map((item) => (
        <>
          {item.sideBySideInput ? (
            <div className="sideInput">
              {item.sideBySideInput.map((item) => (
                <>
                  <div className="inputLabel">
                    <label>{item.label}</label>
                    <input
                      placeholder={item.placeholder}
                      type={item.type}
                      name={item.name}
                      onChange={handlechange}
                    />
                    {/* search how to pass handle submit as props */}
                  </div>
                </>
              ))}
            </div>
          ) : item.selector ? (
            <div className="selectorDiv">
              <div className="selector">
                <input type="checkbox" />
                <label>{item.label}</label>
              </div>
              <button className="btnRed btnForgot" onClick={handle}>
                forgot password
              </button>
            </div>
          ) : (
            <div className="singleInput">
              <label>{item.label}</label>
              <input
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                onChange={handlechange}
              />
            </div>
          )}
        </>
      ))}
      {otp === true ? (
        <button className="otp" onClick={handleResend}>
          resend otp
        </button>
      ) : (
        <></>
      )}
      {nextPrevSided === true ? (
        <div className="sidedButton">
          <Link href={link}>
            <a className="backBtn">Back</a>
          </Link>
          <button className="btnRed sideBtn" onClick={handle}>
            {nextBtn}
          </button>
        </div>
      ) : NextPrevBtn === true ? (
        <div className="nextPrevBtn">
          <button className="signinBtn">Sign in</button>
          <Link href="/">
            <a className="backBtn">Back</a>
          </Link>
          {/* <button>Back</button> */}
        </div>
      ) : NextPrevBtn === false ? (
        <button className="btnRed" onClick={handle}>
          NEXT STEP
        </button>
      ) : (
        <></>
      )}
    </FormContainer>
  );
};

export default FormReg;
