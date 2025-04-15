"use client";

import InputForm from "@/components/InputForm";
import List from "@/components/List";
import { useState } from "react";

interface Item {
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

export default function Home() {
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [items, setItems] = useState<Item[]>([]);

  function resetForm() {
    console.log("Reset form called");
    setName("");
    setItemName("");
    setQuantity(0);
    setUnitPrice(0);
  }

  function createObject() {
    if (!name || !itemName || !quantity || !unitPrice)
      return console.log("Please do not leave anything out!");

    const item = {
      name,
      itemName,
      quantity,
      unitPrice,
    };

    setItems((items) => [...items, item]);
    resetForm();
  }

  return (
    <div className="mx-auto mt-8 flex max-w-4xl justify-between">
      <List itemsObj={items} />
      <InputForm
        name={name}
        itemName={itemName}
        quantity={quantity}
        unitPrice={unitPrice}
        setName={setName}
        setItemName={setItemName}
        setQuantity={setQuantity}
        setUnitPrice={setUnitPrice}
        createObject={createObject}
        resetForm={resetForm}
      />
    </div>
  );
}
