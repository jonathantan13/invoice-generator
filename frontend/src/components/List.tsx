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
  // TODO
  // Why does it re-render 4 times? The reset button seems to also trigger a re-render.

  // 1. We seem to be hitting the auth api route, that causes 2 re-renders.
  // That may also be why the reset button causes a re-render. I'll have
  // to separate the auth process from the header.

  //2. The button label/isSubmitting also seems to cause a re-render.

  const [submission, submitInvoice, isSubmitting] = useActionState(
    submitInvoiceAction,
    { status: "", message: "" },
  );

  if (submission.status === "failed") {
    toast.error(submission.message, {
      duration: 3000,
    });
  }

  if (submission.status === "success") {
    toast.success(submission.message, {
      duration: 3000,
    });
    setItems([]);
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
