import { type } from "os";

export const signIn = [
  {
    label: "Your Email",
    placeholder: "Enter your Email",
    type: "email",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
  },
  {
    selector: true,
    label: "Stay Signed in",
  },
];
export const passwordReset = [
  {
    label: "Your Email",
    placeholder: "Enter your Email",
    type: "email",
    name: "email",
  },
];
export const otpVerify = [
  {
    label: "Enter the 4-digit code that was sent to name@mymail.com",
    placeholder: "Enter code",
    text: "password",
    name: "otp",
  },
];
