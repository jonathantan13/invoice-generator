import { CreateInvoiceItemsProps } from "@/interfaces";
import CreateInvoiceItem from "./CreateInvoiceItem";
import { v4 as uuidv4 } from "uuid";

export default function CreateInvoiceItems({
  invoiceItems,
  setInvoiceItems,
}: CreateInvoiceItemsProps) {
  if (!setInvoiceItems) return null;

  function addInvoiceItem() {
    const id = uuidv4();

    setInvoiceItems((items) => [
      ...items,
      { id, description: "", quantity: 1, unitPrice: "" },
    ]);
  }

  function removeInvoiceItem(id: string) {
    setInvoiceItems((items) => items.filter((item) => item.id !== id));
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
    <div className="col-span-full col-start-1">
      <div className="mb-2 box-border grid grid-cols-[6.5fr_3.5fr_3.5fr_3fr_1fr] gap-4 bg-blue-500 px-2 py-2">
        <h2>Items</h2>
        <h2>Quantity</h2>
        <h2>Unit Price</h2>
        <h2>Total Price</h2>
      </div>
      {invoiceItems.map((item, index) => (
        <CreateInvoiceItem
          key={item.id}
          id={item.id}
          index={index}
          description={item.description}
          quantity={item.quantity}
          unitPrice={item.unitPrice}
          updateItem={updateInvoiceItem}
          onRemove={removeInvoiceItem}
        />
      ))}
      <button
        onClick={addInvoiceItem}
        className="ml-2 hover:cursor-pointer"
        type="button"
      >
        Add item
      </button>
    </div>
  );
}
