import React, { useState } from "react";
import FormReg from "../../../universalComponent/formComponent";
import { loginDetailsSchema } from "../../../universalComponent/schema/corporateSchema";
import { loginFields, companyInfo } from "../../../util/formFields/corporate";
import dotenv from "dotenv";
import * as yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import crypto from "crypto";
const LoginDetailComp = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
      for (let x in newHistoryArr) {
        const algorithm = "aes-256-cbc";

        const generateByte = "hA7wB3e4v87ihj6R";
        const securityKeyGen = "uEKBcN7kMKayW6SF8d0BtaJq60Musbp0";

        const cipher = crypto.createCipheriv(
          algorithm,
          securityKeyGen,
          generateByte
        );
        let doneEncrypt = Buffer.concat([
          cipher.update(newHistoryArr[x]),
          cipher.final(),
        ]).toString("base64");
        newHistoryArr[x] = doneEncrypt;
      }
      console.log(newHistoryArr);
      const otpmail = { email: newHistoryArr.email };
      console.log(otpmail);
      window.sessionStorage.setItem("optMail", JSON.stringify(otpmail));
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
