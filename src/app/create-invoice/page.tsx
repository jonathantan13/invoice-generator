import { auth } from "@/auth";
import CreateInvoice from "@/components/CreateInvoice";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Invoice",
};

export default async function CreateInvoicePage() {
  const session = await auth();

  if (!session)
    return <div className="text-center">Signup/login to get started!</div>;
  else return <CreateInvoice />;
}
