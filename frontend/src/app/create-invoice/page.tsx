import { auth } from "@/auth";
import CreateInvoice from "@/components/CreateInvoice";

export default async function Home() {
  const session = await auth();

  if (!session) return <div>Signup/login to get started!</div>;
  else return <CreateInvoice />;
}
