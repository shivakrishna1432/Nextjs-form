"use server";
import { signIn, signOut } from "@/auth";

export async function socialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/home" });
}

export async function logOut() {
  await signOut({ redirectTo: "/" });
}

export async function CredentialLogin(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      name:formData.get("name"),
      redirect: false,
    });
    return response;
  } catch (e) {
    throw new Error(e);
  }
}
