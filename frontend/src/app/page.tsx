import { auth } from "@/auth";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();

  if (!session)
    return (
      <div>
        Welcome to the invoice generator! Sign in/sign up to start generating
        invoices!
      </div>
    );
  else {
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
}
