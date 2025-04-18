"use client";

import submitList from "@/actions";
import ListItem from "./ListItem";
import Button from "./Button";
import { Item } from "@/app/create-invoice/page";

interface ItemsListProps {
  itemsObj: Item[];
  onRemoveItem: (id: string) => void;
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export default function List({
  itemsObj,
  onRemoveItem,
  setItems,
}: ItemsListProps) {
  return (
    <form
      className="flex w-96 flex-col justify-between border"
      action={submitList}
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
        >
          Submit
        </button>
        <Button onClick={() => setItems([])} label="Clear" />
      </div>
    </form>
  );
}
