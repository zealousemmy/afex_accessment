import React from "react";
import FormReg from "../../universalComponent/formComponent";
import { Register } from "../../util/formFields";

const RegisterComx = () => {
  return (
    <div>
      <FormReg
        selectCategory={true}
        formTitle="first register"
        subTitle="lskdlklskdlkslkdlkslkdlkdl"
        formInputs={Register}
      />
    </div>
  );
};

export default RegisterComx;
