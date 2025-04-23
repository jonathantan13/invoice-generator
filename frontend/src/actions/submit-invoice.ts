"use server";

import { Item } from "@/interfaces";

// const PORT = "http://localhost:8000";

export default async function submitInvoiceAction(
  _prevState: { status: string; message: string },
  formData: FormData,
) {
  const list: Item[] = [];

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("item-")) {
      if (typeof value == "string") {
        const obj = JSON.parse(value);
        list.push(obj);
      }
    }
  }

  console.log(_prevState);

  if (list.length <= 0) {
    return { status: "failed", message: "You cannot submit an empty invoice!" };
  }

  // const res = await axios.post(`${PORT}/generate-invoice`, { invoice: list });
  // const data = res.data;
  // Replace with supabase post request

  return {
    status: "success",
    message: "Invoice has been successfully submitted!",
  };
}
