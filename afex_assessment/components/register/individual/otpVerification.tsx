import { useRouter } from "next/router";
import React, { useState } from "react";
import FormReg from "../../../universalComponent/formComponent";
import { otpSchema } from "../../../universalComponent/schema/corporateSchema";
import { otpVerify } from "../../../util/formFields/individual";
import axios from "axios";
const OtpVerificationComp = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(name);
    console.log(value);
    console.log(form);
  };
  const verifyOtp = () => {
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
        formTitle="opt verify"
        subTitle="verfiy otp"
        formInputs={otpVerify}
        NextPrevBtn={false}
        nextPrevSided={true}
        otp={true}
        link="/register/individual/loginDetail"
        handle={handleSubmit}
        handlechange={handleChange}
        handleResend={verifyOtp}
        nextBtn="Finish"
      />
    </div>
  );
};

export default OtpVerificationComp;
