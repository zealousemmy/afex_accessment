import * as yup from "yup";
export const individualSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().required(),
});
export const loginDetailsSchema = yup.object().shape({
  password: yup.string().required(),
  auth_type: yup.string().required(),
  phone: yup.string().required(),
});

export const otpSchema = yup.object().shape({
  otp: yup.string().required(),
});
