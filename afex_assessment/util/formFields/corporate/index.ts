import { type } from "os";

export const companyInfo = [
  {
    label: "Company Name",
    placeholder: "Enter your company name",
    text: "text",
    name: "company_name",
  },
  {
    sideBySideInput: [
      {
        label: "Type of Business ",
        placeholder: "Select Type of Business",
        type: "text",
        name: "nature_of_business",
      },
      {
        label: "Date of Incorporation",
        placeholder: "Select Date",
        type: "date",
        name: "date_of_incorporation",
      },
    ],
  },
];
export const loginFields = [
  {
    label: "Company Email",
    placeholder: "Company Email",
    text: "email",
    name: "email",
  },
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
];
export const optVerification = [
  {
    label: "Enter the 4-digit code that was sent to name@mymail.com",
    placeholder: "Enter code",
    type: "text",
    name: "enterCode",
  },
];
