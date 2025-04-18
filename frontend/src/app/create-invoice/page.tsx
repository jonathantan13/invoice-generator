"use client";

import InputForm from "@/components/InputForm";
import List from "@/components/List";
import { useState } from "react";

export interface Item {
  id: string;
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  function handleRemoveItem(id: string) {
    setItems((items) => items.filter((item) => item.id != id));
  }

  return (
    <div className="mx-auto mt-8 flex max-w-4xl justify-between">
      <List
        itemsObj={items}
        onRemoveItem={handleRemoveItem}
        setItems={setItems}
      />
      <InputForm setItems={setItems} />
    </div>
  );
}
