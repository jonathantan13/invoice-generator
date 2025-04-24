import { auth } from "@/auth";
import supabase from "@/db";

export default async function Invoices() {
  const session = await auth();

  if (!session) {
    return <div>Sign up to get started!</div>;
  }

  const { data: invoice } = await supabase
    .from("invoice")
    .select("invoice_obj")
    .eq("user_id", session.user?.id);

  if (invoice) {
    for (const i of invoice) {
      console.log(i);
    }
  }

  return <div></div>;
}
