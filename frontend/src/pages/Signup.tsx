import React, { FC } from "react";
import GitHubAuth from "../components/GitHubAuth";

const Signup: FC = () => {
  return (
    <div className=" w-1/3 mx-auto flex h-screen">
      <div className="px-5 h-56 w-full  border-gray-300 shadow-lg rounded-lg border relative">
        <GitHubAuth />
      </div>
    </div>
  );
};

export default Signup;
