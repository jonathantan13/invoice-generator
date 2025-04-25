"use client";

import InputForm from "@/components/InputForm";
import List from "@/components/List";
import { Item } from "@/interfaces";
import { useState } from "react";

export default function CreateInvoiceClone() {
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
