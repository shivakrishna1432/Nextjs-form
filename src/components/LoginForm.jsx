"use client";

import SocialLoginForm from "./SocialLogin";

import { CredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await CredentialLogin(formData);

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/home");
      }
    } catch (e) {
      console.error(e);
      setError("Invalid Credentials");
    }
  };
  return (
    <div>
      <div className="text-xl text-center text-red-500">{error}</div>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="email" className="inline-block w-[116px]">
            Email Address :
          </label>
          <input
            type="email"
            className="border border-black rounded-md px-2 py-1 mx-2"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="my-4">
          <label htmlFor="password" className="inline-block w-[116px]">
            Password :
          </label>
          <input
            type="password"
            className="border border-black rounded-md px-2 mx-2 py-1"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-indigo-400 px-6 py-2 rounded-md text-black font-semibold"
          >
            Login
          </button>
        </div>
      </form>
      <SocialLoginForm />
    </div>
  );
};

export default LoginForm;
