import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import User from "@/components/User";
import Admin from "@/components/Admin";

const HomePage = async () => {
  const session = await auth();
  return (
    <div className="flex justify-center m-4">
      {session?.user?.role === "user" ? (
        <User session={session} />
      ) : (
        <Admin session={session} />
      )}
    </div>
  );
};

export default HomePage;
