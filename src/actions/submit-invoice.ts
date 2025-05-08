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

  // formData object
  /*
    logo: File {
      size: 0,
      type: 'application/octet-stream',
      name: 'undefined',
      lastModified: 1746355499403
    },
    'company-name': '',
    'customer-name': '',
    'company-address': '',
    'customer-address': '',
    'item-description-0': '',
    'item-quantity-0': '1',
    'item-unit-price-0': '',
    'item-total-price-0': '0',
    'item-description-1': '',
    'item-quantity-1': '1',
    'item-unit-price-1': '',
    'item-total-price-1': '0',
    subtotal: '$0',
    'other-info': '',
    'bank-info': ''
  */
  console.log(formData);

  const logo = formData.get("logo");

  console.log(logo);

  if (invoice.length <= 0) {
    return { status: "failed", message: "You cannot submit an empty invoice!" };
  }

  if (!session) {
    return {
      status: "failed",
      message: "You must be authenticated to send an invoice!",
    };
  }

  // const { _, error } = await supabase
  //   .from("invoice")
  //   .insert([{ invoice_obj: invoice, user_id: session.user?.id }])
  //   .select();

  // if (error) {
  //   return {
  //     status: "failed",
  //     message: JSON.stringify(error),
  //   };
  // }

  return {
    status: "success",
    message: "Invoice has been successfully submitted!",
  };
}
