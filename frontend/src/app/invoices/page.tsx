import { auth } from "@/auth";

export default async function Invoices() {
  const session = await auth();

  if (!session) {
    return <div>Sign up to get started!</div>;
  }
  return <div>Your invoices</div>;
}
