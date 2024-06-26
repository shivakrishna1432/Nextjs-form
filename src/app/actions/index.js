"use server";
import { signIn, signOut } from "@/auth";
export async function logIn(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function logOut() {
  await signOut({ redirectTo: "/" });
}
