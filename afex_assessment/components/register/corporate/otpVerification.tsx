import React, { useState } from "react";
import FormReg from "../../../universalComponent/formComponent";
import { optVerification } from "../../../util/formFields/corporate";
import { otpSchema } from "../../../universalComponent/schema/individualSchema";
import axios from "axios";
import { useRouter } from "next/router";
const OptVerifyComp = () => {
  const [form, setForm] = useState({});
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(name);
    console.log(value);
    console.log(form);
  };
  const otpVerify = () => {
    const otpMail = sessionStorage.getItem("optMail");
    let axiosConfig = {
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        "https://comx-sand-api.afexnigeria.com/api/otp/resend",
        otpMail,
        axiosConfig
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let checkMail = await otpSchema.isValid(form);
    if (checkMail === true) {
      router.push("/success");
    }
  };
  return (
    <div>
      <FormReg
        selectCategory={false}
        formTitle="Account details"
        subTitle="Sign up for an account and start trading today"
        formInputs={optVerification}
        NextPrevBtn={false}
        nextPrevSided={true}
        nextBtn="Finish"
        handlechange={handleChange}
        otp={true}
        link="/register/corporate/loginDetail"
        handleResend={otpVerify}
        handle={handleSubmit}
      />
    </div>
  );
};

export default OptVerifyComp;
