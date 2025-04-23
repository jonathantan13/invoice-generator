"use server";

import supabase from "@/db";
import { Item } from "@/interfaces";

export default async function submitInvoiceAction(
  _prevState: { status: string; message: string },
  formData: FormData,
) {
  const invoice: Item[] = [];

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

  const { _, error } = await supabase
    .from("invoice")
    .insert([{ invoice_obj: invoice }])
    .select();

  // TODO: Find a way to automatically get the user_id from sessions

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
