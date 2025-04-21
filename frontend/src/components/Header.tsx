import { auth } from "@/auth";
import signin from "@/actions/sign-in";
import signout from "@/actions/sign-out";
import Link from "next/link";
import { Avatar } from "@heroui/react";

export default async function Header() {
  const session = await auth();

  if (session?.user?.image === null) return null;

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
          <Avatar src={session.user.image} />
          <form action={signout}>
            <button type="submit">Sign out</button>
          </form>
        </div>
      )}
    </header>
  );
}
