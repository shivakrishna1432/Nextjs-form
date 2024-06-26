import { socialLogin } from "@/app/actions";
import React from "react";

const SocialLoginForm = () => {
  return (
    <div>
      <form action={socialLogin}>
        <button
          type="submit"
          name="action"
          value="google"
          className="bg-yellow-400 text-black px-4 py-2 rounded-md m-1"
        >
          Sign in with Google
        </button>
        <button
          type="submit"
          name="action"
          value="github"
          className="bg-black text-white px-4 py-2 rounded-md m-1"
        >
          Sign in with Github
        </button>
      </form>
    </div>
  );
};

export default SocialLoginForm;
