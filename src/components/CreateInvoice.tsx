"use client";

import submitInvoiceAction from "@/actions/submit-invoice";
import { useActionState, useEffect } from "react";
import CreateInvoiceItem from "./CreateInvoiceItem";

export default function CreateInvoice() {
  const [submission, action] = useActionState(submitInvoiceAction, {
    status: "",
    message: "",
  });

  useEffect(() => {}, []);

  return (
    <form
      action={action}
      className="grid grid-cols-4 gap-4 rounded-[8px] bg-gray-200 p-6"
    >
      <h1 className="text-3xl font-bold">INVOICE</h1>
      <div className="col-start-4 h-48 border">
        <div className="h-[75%] text-center">
          <h2>Choose your logo</h2>
        </div>
        <input type="file" name="logo" accept="image/*" className="items-end" />
      </div>
      <input
        type="text"
        name="company-name"
        placeholder="Your company name..."
        className="border"
      />
      <input
        type="text"
        name="customer-name"
        placeholder="Who are you billing to"
        className="col-start-4 border"
      />
      <textarea
        name="company-address"
        placeholder="Your company address"
        className="border"
      />
      <textarea
        name="customer-address"
        placeholder="Customer address"
        className="col-start-4 border"
      />
      <div className="col-span-2 row-span-2 flex flex-col">
        <div className="flex flex-row">
          <label htmlFor="" className="w-32">
            Invoice No. :
          </label>
          <input type="text" />
        </div>
        <div className="flex flex-row">
          <label htmlFor="" className="w-32">
            Invoice Date:
          </label>
          <input type="text" />
        </div>
      </div>
      <div className="col-span-full col-start-1">
        <CreateInvoiceItem />
      </div>
      <hr className="col-span-full" />
      <div className="col-start-4 flex flex-row gap-3">
        <label htmlFor="">Subtotal:</label>
        <input type="text" className="border" disabled />
      </div>
      <textarea placeholder="Other information" className="h-48 border" />
      <textarea
        placeholder="Bank Information (Optional)"
        className="h-48 border"
      />
    </form>
  );
}
