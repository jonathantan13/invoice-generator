"use client";

import submitInvoiceAction from "@/actions/submit-invoice";
import CreateInvoiceItem from "./CreateInvoiceItem";
import FormUploadLogo from "./FormUploadLogo";
import FormBilling from "./FormBilling";
import FormInvoiceTracking from "./FormInvoiceTracking";
import FormAdditionalAndBank from "./FormAdditional";
import FormSubtotal from "./FormSubtotal";
import { useActionState, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateInvoice() {
  const [invoiceItems, setInvoiceItems] = useState([
    { id: "123456789", description: "", quantity: 1, unitPrice: "" },
  ]);
  const [submission, action] = useActionState(submitInvoiceAction, {
    status: "",
    message: "",
  });

  useEffect(() => {
    if (submission.status === "failed") {
    }
  }, [submission]);

  function addInvoiceItem() {
    const id = uuidv4();

    setInvoiceItems((items) => [
      ...items,
      { id, description: "", quantity: 1, unitPrice: "" },
    ]);
  }

  function removeInvoiceItem(id: string) {
    setInvoiceItems((items) => items.filter((item) => item.id === id));
  }

  function updateInvoiceItem(
    id: string,
    field: string,
    value: string | number,
  ) {
    setInvoiceItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  }

  return (
    <form
      action={action}
      className="grid grid-cols-4 gap-4 rounded-[8px] bg-gray-200 p-6"
    >
      <h1 className="text-3xl font-bold">INVOICE</h1>
      <FormUploadLogo />
      <FormBilling />
      <FormInvoiceTracking />
      <div className="col-span-full col-start-1">
        <div className="mb-2 box-border grid grid-cols-[6.5fr_3.5fr_3.5fr_3fr_1fr] gap-4 bg-blue-500 px-2 py-2">
          <h2>Items</h2>
          <h2>Quantity</h2>
          <h2>Unit Price</h2>
          <h2>Total Price</h2>
        </div>
        {invoiceItems.map((item) => (
          <CreateInvoiceItem
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            unitPrice={item.unitPrice}
            updateItem={updateInvoiceItem}
            onRemove={removeInvoiceItem}
          />
        ))}
        <button onClick={addInvoiceItem} className="ml-2">
          Add item
        </button>
      </div>
      <hr className="col-span-full" />
      <FormSubtotal invoiceItems={invoiceItems} />
      <FormAdditionalAndBank />
    </form>
  );
}
