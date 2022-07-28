import React from "react";
import FormReg from "../../../universalComponent/formComponent";
import { loginFields } from "../../../util/formFields/individual";
const LoginDetailComp = () => {
  return (
    <div>
      <FormReg
        selectCategory={false}
        formTitle="individual login detail"
        subTitle="individual nksdskdkjkd"
        formInputs={loginFields}
        NextPrevBtn={false}
      />
    </div>
  );
};

export default LoginDetailComp;
