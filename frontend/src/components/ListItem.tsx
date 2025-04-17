"use client";

interface Item {
  id: string;
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  onRemoveItem: (id: string) => void;
}

export default function ListItem({
  id,
  name,
  itemName,
  quantity,
  unitPrice,
  onRemoveItem,
}: Item) {
  return (
    <li className="flex justify-between border px-1 py-2">
      <div className="flex flex-col">
        <p>
          Buyer: <span className="font-bold">{name}</span>
        </p>
        <h2>Product: {itemName}</h2>
        <div className="flex gap-2">
          <p>x{quantity}</p>
          <p>${unitPrice}</p>
        </div>
      </div>
      <button onClick={() => onRemoveItem(id)} type="button">
        ❌
      </button>
    </li>
  );
}
