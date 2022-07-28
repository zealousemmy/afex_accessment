import { useRouter } from "next/router";
import React from "react";
import { DivContainer } from "./style";
export const SignIn = () => {
  let router = useRouter();
  const handleSignIn = () => {
    router.push("/signin");
  };
  return (
    <DivContainer>
      <h3>Sign in to ComX</h3>
      <p>Welcome to ComX</p>
      <button className="btnGreen" onClick={handleSignIn}>
        Sign in
      </button>
    </DivContainer>
  );
};
export const SignUp = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/register/individual");
  };
  return (
    <DivContainer>
      <h3>Sign in to ComX</h3>
      <p>Join the family</p>
      <button className="btnDark" onClick={handleRegister}>
        Register
      </button>
    </DivContainer>
  );
};
