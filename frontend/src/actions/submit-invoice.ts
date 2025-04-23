"use server";

import { auth } from "@/auth";
import supabase from "@/db";
import { Item } from "@/interfaces";

export default async function submitInvoiceAction(
  _prevState: { status: string; message: string },
  formData: FormData,
) {
  const invoice: Item[] = [];
  const session = await auth();

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("item-")) {
      if (typeof value == "string") {
        const obj = JSON.parse(value);
        invoice.push(obj);
      }
    }
  }

  if (invoice.length <= 0) {
    return { status: "failed", message: "You cannot submit an empty invoice!" };
  }

  if (!session) {
    return {
      status: "failed",
      message: "You must be authenticated to send an invoice!",
    };
  }

  const { _, error } = await supabase
    .from("invoice")
    .insert([{ invoice_obj: invoice, user_id: session.user?.id }])
    .select();

  if (error) {
    return {
      status: "failed",
      message: JSON.stringify(error),
    };
  }

  return {
    status: "success",
    message: "Invoice has been successfully submitted!",
  };
}
