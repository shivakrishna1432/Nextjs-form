import LoginForm from "@/components/LoginForm";
import React from "react";

const page = () => {
  return (
    <div
      className="flex flex-col justify-center items-center m-4 bg-blue-200 w-[40rem] mx-auto p-6 rounded-lg mt-[10%] shadow-md shadow-slate-800"
    >
      <h1 className="text-3xl my-3 font-semibold">Welcome, Please Sign In</h1>
      <LoginForm />
    </div>
  );
};

export default page;
