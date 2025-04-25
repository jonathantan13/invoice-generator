"use server";

import { signIn } from "@/auth";

export default async function signin() {
  await signIn();
}
