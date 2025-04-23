"use client";

import signin from "@/actions/sign-in";
import { AvatarDropdown } from "./ui/avatar-dropdown";
import { useSession } from "next-auth/react";

export default function HeaderAuth() {
  const { data: session } = useSession();

  return (
    <>
      {!session?.user ? (
        <form action={signin}>
          <button
            type="submit"
            className="hover:cursor-pointer hover:text-gray-600"
          >
            Sign in
          </button>
        </form>
      ) : (
        <AvatarDropdown />
      )}
    </>
  );
}
