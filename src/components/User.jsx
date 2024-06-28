import Image from "next/image";
import React from "react";
import Logout from "./Logout";

const User = ({ session }) => {
  const { user } = session;
  return (
    <div className="bg-pink-200 w-[40rem] p-6 mx-auto flex flex-col items-center rounded-md">
      <h1 className="text-2xl my-3">
        Welcome <span className="text-blue-500 font-semibold">{user?.name},</span> You are
        Logged in as {user?.role}
      </h1>
      <div>
        <Image
          src={user?.image}
          alt={user?.name}
          width={72}
          height={72}
          className="rounded-full"
        />
      </div>
      <h1 className="text-2xl my-3">
        <strong>Role :</strong> {user?.role}
      </h1>
      <Logout />
    </div>
  );
};

export default User;
