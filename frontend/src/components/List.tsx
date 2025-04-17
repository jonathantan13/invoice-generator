"use client";

import ListItem from "./ListItem";

interface Item {
  id: string;
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

interface ItemsListProps {
  itemsObj: Item[];
  onRemoveItem: (id: string) => void;
}

export default function List({ itemsObj, onRemoveItem }: ItemsListProps) {
  return (
    <form className="w-96 border">
      <ul>
        {itemsObj.map((item, index) => (
          <ListItem
            key={index}
            id={item.id}
            name={item.name}
            itemName={item.itemName}
            quantity={item.quantity}
            unitPrice={item.unitPrice}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </ul>
    </form>
  );
}
