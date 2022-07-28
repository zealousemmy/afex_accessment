import React from "react";
import FormReg from "../../../universalComponent/formComponent";
import { otpVerify } from "../../../util/formFields/individual";

const OtpVerificationComp = () => {
  return (
    <div>
      <FormReg
        selectCategory={false}
        formTitle="opt verify"
        subTitle="verfiy otp"
        formInputs={otpVerify}
        NextPrevBtn={false}
      />
    </div>
  );
};

export default OtpVerificationComp;
