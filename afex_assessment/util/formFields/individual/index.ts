import { type } from "os";

export const basicInfo = [
  {
    sideBySideInput: [
      {
        label: "Your First Name",
        placeholder: "Enter your First Name",
        type: "text",
        name: "first_name",
      },
      {
        label: "Your Last Name",
        placeholder: "904329190",
        type: "text",
        name: "last_name",
      },
    ],
  },
  {
    label: "Your Email",
    placeholder: "Enter your Email",
    type: "email",
    name: "email",
  },
];
export const loginFields = [
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm Password",
    type: "password",
    name: "auth_type",
  },
  {
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "string",
    name: "phone",
  },
];
export const otpVerify = [
  {
    label:
      "Enter the 4-digit code that was sent to +23472639482 and name@mymail.com",
    placeholder: "Enter code",
    text: "password",
    name: "code",
  },
];
