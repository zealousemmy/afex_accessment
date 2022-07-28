import React from "react";
import FormReg from "../universalComponent/formComponent";
import { basicInfo } from "../util/formFields/individual";

const Welcome = () => {
  return (
    <div>
      <FormReg
        selectCategory={true}
        formTitle="Register new account"
        subTitle="Sign up for an account and start trading today"
        formInputs={basicInfo}
      />
    </div>
  );
};

export default Welcome;
