"use client";

interface Item {
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

export default function ListItem({
  name,
  itemName,
  quantity,
  unitPrice,
}: Item) {
  return (
    <li className="flex flex-col border">
      <p>
        Buyer: <span className="font-bold">{name}</span>
      </p>
      <h2>Product: {itemName}</h2>
      <div className="flex gap-2">
        <p>x{quantity}</p>
        <p>${unitPrice}</p>
      </div>
    </li>
  );
}
