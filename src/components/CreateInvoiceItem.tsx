import { InvoiceItem } from "@/interfaces";

export default function CreateInvoiceItem({
  id,
  description,
  quantity,
  unitPrice,
  updateItem,
}: InvoiceItem) {
  const totalPrice = quantity * Number(unitPrice);

  return (
    <div className="mb-2 grid grid-cols-4 gap-4">
      <input
        name=""
        type="text"
        placeholder="Item Description"
        className="border-box border border-gray-800 px-2"
        value={description}
        onChange={(e) => updateItem(id, "description", e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        className="border-box border border-gray-800 px-2"
        value={quantity}
        onChange={(e) =>
          updateItem(
            id,
            "quantity",
            Number(e.target.value) > 0 ? Number(e.target.value) : quantity,
          )
        }
      />
      <input
        type="text"
        placeholder="Unit Price"
        className="border-box border border-gray-800 px-2"
        value={unitPrice}
        onChange={(e) => updateItem(id, "unitPrice", e.target.value)}
      />
      <input
        type="text"
        placeholder="Total price"
        className="border-box border border-gray-800 px-2"
        disabled
        value={totalPrice || 0}
      />
    </div>
  );
}

// TODO: Maybe unit price and total price should be strings, and converted to a number upon form submission
