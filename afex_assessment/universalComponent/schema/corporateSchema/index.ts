import * as yup from "yup";
export const corporateSchema = yup.object().shape({
  company_name: yup.string().required(),
  nature_of_business: yup.string().required(),
  date_of_incorporation: yup.string().required(),
});
export const loginDetailsSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  auth_type: yup.string().required(),
});

export const otpSchema = yup.object().shape({
  otp: yup.string().required(),
});
