import { auth } from "@/auth";
import signin from "@/actions/sign-in";
import Link from "next/link";
import { AvatarDropdown } from "./ui/avatar-dropdown";

export default async function Header() {
  const session = await auth();

  if (session?.user?.image === null) return null;

  return (
    <header className="mb-8 box-border bg-gray-700/20 px-4 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link href="/" className="font-bold">
          Home
        </Link>
        <Link href="/create-invoice">Create invoice</Link>
        <Link href="/invoices">Your invoices</Link>
        {!session?.user ? (
          <form action={signin}>
            <button type="submit">Sign in</button>
          </form>
        ) : (
          <AvatarDropdown />
        )}
      </div>
    </header>
  );
}
