import React from "react";
import { useNavigate } from "react-router-dom";

import loginImg from "../../assetss/logo.svg";

export default function Login() {
  let history = useNavigate();

  history("/home");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-[#FEB200] hidden sm:block">
        <div className="flex h-full justify-center items-center">
          <img className="object-cover" src={loginImg} alt="" />
        </div>
      </div>

      <div className="bg-[#F8F8F8] flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto">
          <h2 className="text-4xl font-bold text-center py-6">Login</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border border-black p-2 rounded-lg" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border border-black p-2 rounded-lg"
              type="password"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => {
                history("");
              }}
              className="border w-1/2 my-5 py-2 bg-black text-white font-bold"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
