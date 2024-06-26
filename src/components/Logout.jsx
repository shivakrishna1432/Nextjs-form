import React from "react";
import { logOut } from "@/app/actions";

const Logout = () => {
  return (
    <div>
      <form action={logOut}>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 my-3"
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
