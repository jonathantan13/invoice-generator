"use client";

import InputForm from "@/components/InputForm";
import List from "@/components/List";
import { useState } from "react";

export interface Item {
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);

  return (
    <div className="mx-auto mt-8 flex max-w-4xl justify-between">
      <List itemsObj={items} />
      <InputForm setItems={setItems} />
    </div>
  );
}
