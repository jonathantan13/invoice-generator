"use client";

interface Item {
  id: string;
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  onRemoveItem: (id: string) => void;
  input: React.ReactElement;
}

export default function ListItem({
  id,
  name,
  itemName,
  quantity,
  unitPrice,
  onRemoveItem,
  input,
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
      {input}
      <button
        onClick={() => onRemoveItem(id)}
        type="button"
        className="hover:cursor-pointer"
      >
        ❌
      </button>
    </li>
  );
}
