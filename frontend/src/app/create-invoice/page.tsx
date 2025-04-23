import { auth } from "@/auth";
import CreateInvoice from "@/components/CreateInvoice";

export default async function Home() {
  const session = await auth();

  // console.log(session);
  if (!session)
    return <div className="text-center">Signup/login to get started!</div>;
  else return <CreateInvoice />;
}
