"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function WelcomePage() {
  const { data: session } = useSession();

  if (!session)
    return (
      <div className="text-center">
        <h2>
          Welcome to the invoice generator! <button>Sign up</button> to start
          generating invoices!
        </h2>
      </div>
    );
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2 text-center">
      <h2 className="text-2xl font-bold">
        Welcome back, {session?.user?.name}
      </h2>
      <p>
        Start generating invoices{" "}
        <Link href="/create-invoice" className="text-blue-600 underline">
          now.
        </Link>
      </p>
    </div>
  );
}
