import type { NextPage } from "next";
import { SignUp, SignIn } from "../components/signIn-signUp";
const Home: NextPage = () => {
  return (
    <div className="div">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Home;
