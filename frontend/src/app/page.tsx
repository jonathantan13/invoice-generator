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
      <div>
        <p>Welcome back, {session?.user?.name}</p>
        <br />
        <p>
          Start generating invoices <Link href="/create-invoice">now</Link>
        </p>
      </div>
    );
  }
}
