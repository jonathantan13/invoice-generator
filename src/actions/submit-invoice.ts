"use server";

import { auth } from "@/auth";
import { Item } from "@/interfaces";
import supabase from "@/db";

export default async function submitInvoiceAction(
  _prevState: { status: string; message: string },
  formData: FormData,
) {
  const invoice: Item[] = [];
  const session = await auth();

  if (!session) {
    return {
      status: "failed",
      message: "You must be authenticated to send an invoice!",
    };
  }

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

  const logo = formData.get("logo");
  const companyName = formData.get("company-name");
  const companyAddress = formData.get("company-address");
  const customerAddress = formData.get("customer-address");
  const subtotal = formData.get("subtotal");
  const otherInfo = formData.get("other-info");
  const bankInfo = formData.get("bank-info");

  // I will be back once I master JavaScript, see you in 3 months

  if (
    !logo ||
    !companyName ||
    !companyAddress ||
    !customerAddress ||
    !subtotal
  ) {
    return {
      status: "failed",
      message: "Please make sure you fill up all the necessary fields!",
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
