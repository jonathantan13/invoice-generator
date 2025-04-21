import { auth } from "@/auth";
import signin from "@/actions/sign-in";
import signout from "@/actions/sign-out";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/ui/avatar";

export default async function Header() {
  const session = await auth();

  if (session?.user?.image === null) return null;

  return (
    <header className="mx-auto flex max-w-4xl items-center justify-between">
      <Link href="/">Home</Link>
      <Link href="/create-invoice">Create invoice</Link>
      {!session?.user ? (
        <form action={signin}>
          <button type="submit">Sign in</button>
        </form>
      ) : (
        <div className="flex flex-col items-end">
          <Avatar>
            <AvatarImage src={session.user.image} />
          </Avatar>
          <form action={signout}>
            <button type="submit">Sign out</button>
          </form>
        </div>
      )}
    </header>
  );
}
