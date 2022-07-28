import React from "react";
import FormReg from "../../../universalComponent/formComponent";
import { optVerification } from "../../../util/formFields/corporate";
const OptVerifyComp = () => {
  return (
    <div>
      <FormReg
        selectCategory={false}
        formTitle="OPT"
        subTitle="klklkklldklksldklkdlklk"
        formInputs={optVerification}
        NextPrevBtn={false}
      />
    </div>
  );
};

export default OptVerifyComp;
