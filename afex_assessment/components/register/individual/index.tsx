import { useRouter } from "next/router";
import React, { useState } from "react";
import FormReg from "../../../universalComponent/formComponent";
import { individualSchema } from "../../../universalComponent/schema/individualSchema";
import { basicInfo } from "../../../util/formFields/individual";
const IndividualComp = () => {
  const [form, setForm] = useState({});
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleNext = async (e: any) => {
    e.preventDefault();
    let a = await individualSchema.isValid(form);
    console.log(a);
    if (a === true) {
      window.sessionStorage.setItem("key", JSON.stringify(form));
      router.push("/register/individual/loginDetail");
    }
  };
  return (
    <div>
      <FormReg
        selectCategory={true}
        formTitle="Register new account"
        subTitle="Sign up for an account and start trading today"
        formInputs={basicInfo}
        NextPrevBtn={false}
        handlechange={handleChange}
        handle={handleNext}
      />
    </div>
  );
};

export default IndividualComp;
