"use client";

import ListItem from "./ListItem";

interface Item {
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

interface ItemsListProps {
  itemsObj: Item[];
}

export default function List({ itemsObj }: ItemsListProps) {
  if (typeof window === "undefined") return null;

  return (
    <form className="w-64 border">
      <ul>
        {itemsObj.map((item, index) => (
          <ListItem
            key={index}
            name={item.name}
            itemName={item.itemName}
            quantity={item.quantity}
            unitPrice={item.unitPrice}
          />
        ))}
      </ul>
    </form>
  );
}
