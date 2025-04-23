"use client";

import submitInvoiceAction from "@/actions/submit-invoice";
import ListItem from "./ListItem";
// import Button from "./Button";
import { ItemsListProps } from "@/interfaces";
import { useActionState } from "react";
import toast from "react-hot-toast";

export default function List({
  itemsObj,
  onRemoveItem,
  setItems,
}: ItemsListProps) {
  // Form is submitted via server action, the formData gets passed in.
  // I want the server action to send back a success or failed status, so
  // I can implement a toast accordingly.

  // Why does it re-render 4 times? The reset button seems to also trigger a response.

  const [submission, submitInvoice, isSubmitting] = useActionState(
    submitInvoiceAction,
    { status: "", message: "" },
  );

  if (submission.status === "failed") {
    toast.error("Cannot submit empty invoice!", {
      duration: 3000,
    });
  }

  if (submission.status === "success") {
    toast.success("Invoice has been successfully submitted!", {
      duration: 3000,
    });
  }

  return (
    <form
      className="flex w-96 flex-col justify-between border"
      action={submitInvoice}
    >
      <ul>
        {itemsObj.map((item, index) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            itemName={item.itemName}
            quantity={item.quantity}
            unitPrice={item.unitPrice}
            onRemoveItem={onRemoveItem}
            input={
              <input
                key={index}
                type="hidden"
                name={`item-${index}`}
                value={JSON.stringify(item)}
              />
            }
          />
        ))}
      </ul>
      <div className="mx-auto flex w-[60%] justify-between">
        <button
          className="w-16 bg-blue-500 text-white hover:cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        <button onClick={() => setItems([])} type="reset">
          Clear
        </button>
      </div>
    </form>
  );
}
