"use client";

import { useLogin } from "@/hooks/useLogin";

import React from "react";

const AdminLogin = () => {
  const {
    loading,
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    error,
  } = useLogin();

  return (
    <div className=" h-screen w-screen flex justify-center items-center">
      <div className="bg-white shadow-sm rounded-sm flex flex-col px-5 pb-9 pt-5 w-[300px]">
        <h1 className="text-[20px] text-center font-bold">LOGIN</h1>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] font-semibold px-2 text-[12px] focus:border-gray-500 mt-3"
        />
        {error.email && (
          <p className="text-red-500 text-[12px]">{error.email}</p>
        )}

        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border-1 py-1.5 rounded-sm border-gray-300 placeholder:text-[12px] font-semibold px-2 text-[12px] focus:border-gray-500 mt-3"
        />
        {error.password && (
          <p className="text-red-500 text-[12px]">{error.password}</p>
        )}
        <span
          onClick={handleLogin}
          className="text-[12px] px-3 py-2 cursor-pointer bg-[#a53ee5] hover:bg-[#d289ff] text-white rounded-sm text-center mt-3"
        >
          {loading ? "LOADING" : "SUBMIT"}
        </span>
      </div>
    </div>
  );
};

export default AdminLogin;
