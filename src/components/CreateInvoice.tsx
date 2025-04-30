"use client";

import submitInvoiceAction from "@/actions/submit-invoice";
import { useActionState, useEffect, useState } from "react";
import CreateInvoiceItem from "./CreateInvoiceItem";

export default function CreateInvoice() {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [submission, action] = useActionState(submitInvoiceAction, {
    status: "",
    message: "",
  });

  useEffect(() => {
    if (submission.status === "failed") {
    }
  }, [submission]);

  return (
    <form
      action={action}
      className="grid grid-cols-4 gap-4 rounded-[8px] bg-gray-200 p-6"
    >
      <h1 className="text-3xl font-bold">INVOICE</h1>
      <label
        htmlFor="upload-img"
        className="col-start-4 h-48 border border-gray-800 text-center"
      >
        Add your logo
      </label>
      <input
        id="upload-img"
        type="file"
        name="logo"
        accept="image/*"
        className="hidden"
      />
      <input
        type="text"
        name="company-name"
        placeholder="Your company name"
        className="box-border border border-gray-800 px-2"
      />
      <input
        type="text"
        name="customer-name"
        placeholder="Who you are billing to"
        className="col-start-4 box-border border border-gray-800 px-2"
      />
      <textarea
        name="company-address"
        placeholder="Your company address"
        className="box-border h-28 resize-none border border-gray-800 px-2"
      />
      <textarea
        name="customer-address"
        placeholder="Customer address"
        className="col-start-4 box-border resize-none border border-gray-800 px-2"
      />
      <div className="col-span-2 row-span-2 flex flex-col gap-2">
        <div className="flex flex-row">
          <label htmlFor="" className="w-32">
            Invoice No. :
          </label>
          <input
            type="text"
            className="border-box border border-gray-800 px-1"
          />
        </div>
        <div className="flex flex-row">
          <label htmlFor="" className="w-32">
            Invoice Date:
          </label>
          <input
            type="text"
            className="border-box border border-gray-800 px-1"
          />
        </div>
      </div>
      <div className="col-span-full col-start-1">
        <div className="grid grid-cols-4 gap-4">
          <h2>Items</h2>
          <h2>Quantity</h2>
          <h2>Unit Price</h2>
          <h2>Total Price</h2>
          <CreateInvoiceItem />
        </div>
      </div>
      <hr className="col-span-full" />
      <div className="col-start-4 flex flex-row gap-3">
        <label htmlFor="">Subtotal:</label>
        <input type="text" className="border border-gray-800" disabled />
      </div>
      <textarea
        placeholder="Other information"
        className="border-box h-48 resize-none border border-gray-800 px-2"
      />
      <textarea
        placeholder="Bank Information (Optional)"
        className="border-box h-48 resize-none border border-gray-800 px-2"
      />
    </form>
  );
}
