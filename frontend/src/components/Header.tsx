import { signIn } from "@/auth";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/create-invoice">Create invoice</Link>
      <button onClick={signIn}>Sign in</button>
      {/* <Link href={`invoice/${id}`}>Your invoices</Link> */}
    </header>
  );
}
