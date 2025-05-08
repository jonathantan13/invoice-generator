"use client";

import submitInvoiceAction from "@/actions/submit-invoice";
import FormUploadLogo from "./FormUploadLogo";
import FormBilling from "./FormBilling";
import FormInvoiceTracking from "./FormInvoiceTracking";
import FormAdditionalAndBank from "./FormAdditional";
import FormSubtotal from "./FormSubtotal";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import CreateInvoiceItems from "./CreateInvoiceItems";
import { InvoiceItems } from "@/interfaces";

export default function CreateInvoice() {
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItems>([
    { id: "123456789", description: "", quantity: 1, unitPrice: "" },
  ]);
  const [submission, action] = useActionState(submitInvoiceAction, {
    status: "",
    message: "",
  });

  useEffect(() => {
    if (submission.status === "failed") {
      toast.error(submission.message, {
        duration: 4000,
      });
    }
    if (submission.status === "success") {
      toast.success(submission.message, {
        duration: 3000,
      });
    }
  }, [submission]);

  return (
    <form
      action={action}
      className="relative grid grid-cols-4 gap-4 rounded-[8px] bg-gray-200 p-6"
    >
      <h1 className="text-3xl font-bold">INVOICE</h1>
      <FormUploadLogo />
      <FormBilling />
      <FormInvoiceTracking />
      <CreateInvoiceItems
        invoiceItems={invoiceItems}
        setInvoiceItems={setInvoiceItems}
      />
      <hr className="col-span-full" />
      <FormSubtotal
        invoiceItems={invoiceItems}
        setInvoiceItems={setInvoiceItems}
      />
      <FormAdditionalAndBank />
      <button type="submit" className="absolute right-15 bottom-10">
        Submit
      </button>
    </form>
  );
}
