import React, { useState } from "react";
import FormReg from "../../../universalComponent/formComponent";
import { loginDetailsSchema } from "../../../universalComponent/schema/corporateSchema";
import { loginFields, companyInfo } from "../../../util/formFields/corporate";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
const LoginDetailComp = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(name);
    console.log(value);
    console.log(form);
  };
  const handleNext = async (e: any) => {
    e.preventDefault();
    let a = await loginDetailsSchema.isValid(form);
    console.log(a);
    if (a === true) {
      let StoredData = window.sessionStorage.getItem("key");
      let historyArr;
      if (StoredData) {
        historyArr = JSON.parse(StoredData);
      }
      //   console.log(historyArr);
      const newHistoryArr = { ...historyArr, ...form };
      //   console.log(newHistoryArr.email);
      const otpmail = { email: newHistoryArr.email };
      console.log(otpmail);
      window.sessionStorage.setItem("key", JSON.stringify(newHistoryArr));
      let axiosConfig = {
        headers: {
          Accept: "application/json, text/plain",
          "Content-Type": "application/json",
        },
      };
      axios
        .post(
          `https://comx-sand-api.afexnigeria.com/api/corporate-client-register`,
          newHistoryArr,
          axiosConfig
        )
        .then((res) => console.log(res))
        .catch((err) => {
          console.log(err);
        });
      router.push("/register/corporate/otpVerification");
    }
  };
  return (
    <div>
      <FormReg
        selectCategory={false}
        formTitle="jkjkdajkjkjksjakj"
        subTitle="kjkajskjakjskajksjkajsk"
        formInputs={loginFields}
        handlechange={handleChange}
        handle={handleNext}
        NextPrevBtn={false}
      />
    </div>
  );
};

export default LoginDetailComp;
