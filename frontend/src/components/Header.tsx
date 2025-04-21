import signin from "@/actions/sign-in";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-between">
      <Link href="/">Home</Link>
      <Link href="/create-invoice">Create invoice</Link>
      {!session?.user ? (
        <form action={signin}>
          <button type="submit">Sign in</button>
        </form>
      ) : (
        <p>Welcome back, {session?.user.name}</p>
      )}
      {/* <Link href={`invoice/${id}`}>Your invoices</Link> */}
    </header>
  );
}
