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
    <form action={action} className="grid grid-cols-4 gap-4">
      <h1 className="text-3xl font-bold">INVOICE</h1>
      <input type="file" className="col-start-4 h-48 w-48" />
      <input type="text" placeholder="Your company name..." />
      <input
        type="text"
        placeholder="Who do you bill to"
        className="col-start-4"
      />
      <textarea placeholder="Your company address" />
      <textarea placeholder="Customer address" className="col-start-4" />
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
      <div className="col-start-4">
        <label htmlFor="">Subtotal:</label>
        <input type="text" />
      </div>
      <textarea placeholder="Other information" />
      <textarea placeholder="Bank Information (Optional)" />
    </form>
  );
}
