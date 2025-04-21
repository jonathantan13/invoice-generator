import signin from "@/actions/sign-in";
import signout from "@/actions/sign-out";
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
        <div className="flex flex-col items-end">
          <p>Welcome back, {session?.user.name}</p>
          <form action={signout}>
            <button type="submit">Sign out</button>
          </form>
        </div>
      )}
      {/* <Link href={`invoice/${id}`}>Your invoices</Link> */}
    </header>
  );
}
