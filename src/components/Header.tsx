import Link from "next/link";
import HeaderAuth from "./HeaderAuth";

export default function Header() {
  return (
    <header className="mb-8 box-border bg-gray-700/20 px-4 py-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link href="/" className="font-bold">
          HOME
        </Link>
        <Link href="/create-invoice" className="hover:text-gray-600">
          Create invoice
        </Link>
        <Link href="/invoices" className="hover:text-gray-600">
          Your invoices
        </Link>
        <HeaderAuth />
      </div>
    </header>
  );
}
