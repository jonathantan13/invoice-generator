import { InvoiceItem } from "@/interfaces";

export default function CreateInvoiceItem({
  id,
  description,
  index,
  quantity,
  unitPrice,
  updateItem,
  onRemove,
}: InvoiceItem) {
  const totalPrice = quantity * Number(unitPrice);

  if (!updateItem || !onRemove) return null;

  return (
    <div className="box-border grid grid-cols-[15fr_2fr_2fr_2fr_1fr] gap-2 px-2 py-2">
      <input
        name={`item-description-${index}`}
        type="text"
        placeholder="Item Description"
        className="border-box border border-gray-800 px-2"
        value={description}
        onChange={(e) => updateItem(id, "description", e.target.value)}
      />
      <input
        name={`item-quantity-${index}`}
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
        name={`item-unit-price-${index}`}
        type="text"
        placeholder="Unit Price"
        className="border-box border border-gray-800 px-2"
        value={unitPrice}
        onChange={(e) =>
          updateItem(
            id,
            "unitPrice",
            typeof Number(e.target.value) === "number" ? e.target.value : "",
          )
        }
      />
      <input
        name={`item-total-price-${index}`}
        type="text"
        placeholder="Total price"
        className="border-box border border-gray-800 px-2"
        value={totalPrice || 0}
        readOnly
      />
      <button onClick={() => onRemove(id)} className="hover:cursor-pointer">
        ❌
      </button>
    </div>
  );
}

// TODO: Maybe unit price and total price should be strings, and converted to a number upon form submission
