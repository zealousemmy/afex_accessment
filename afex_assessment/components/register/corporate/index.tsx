import React, { useState } from "react";
import axios from "axios";
import FormReg from "../../../universalComponent/formComponent";
import { loginFields, companyInfo } from "../../../util/formFields/corporate";
import { corporateSchema } from "../../../universalComponent/schema/corporateSchema";
import { useRouter } from "next/router";
const CorporateComp = () => {
  const [form, setForm] = useState({});
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleNext = async (e: any) => {
    e.preventDefault();
    let a = await corporateSchema.isValid(form);
    console.log(a);
    if (a === true) {
      window.sessionStorage.setItem("key", JSON.stringify(form));
      router.push("/register/corporate/loginDetail");
    }
  };
  return (
    <div>
      <FormReg
        selectCategory={true}
        formTitle="Register new account"
        subTitle="Sign up for an account and start trading today"
        formInputs={companyInfo}
        handlechange={handleChange}
        handle={handleNext}
        NextPrevBtn={false}
      />
    </div>
  );
};

export default CorporateComp;
