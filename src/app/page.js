import LoginForm from "@/components/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3 font-semibold">Welcome, Please sign In</h1>
      <LoginForm />
    </div>
  );
};

export default page;
