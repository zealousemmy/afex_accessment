import React from "react";
import FormReg from "../../../universalComponent/formComponent";
import { signIn } from "../../../util/formFields/signIn";
// import { basicInfo } from "../../../util/formFields/individual";

const SignInComp = () => {
  return (
    <div>
      <FormReg
        selectCategory={false}
        formTitle="Register new account"
        subTitle="Sign up for an account and start trading today"
        formInputs={signIn}
        NextPrevBtn={true}
      />
    </div>
  );
};

export default SignInComp;
