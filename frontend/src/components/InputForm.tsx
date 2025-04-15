"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { Item } from "@/app/page";

interface setItems {
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

export default function InputForm({ setItems }: setItems) {
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

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
    <form className="max-w-8xl flex flex-col">
      <Input
        length="w-[20rem]"
        label="Your Name"
        type="text"
        input={name}
        onChange={setName}
      />
      <Input
        length="w-[20rem]"
        label="Item Name"
        type="text"
        input={itemName}
        onChange={setItemName}
      />
      <Input
        length="w-[10rem]"
        label="Quantity"
        type="number"
        input={quantity}
        onChange={setQuantity}
      />
      <Input
        length="w-[10rem]"
        label="Unit Price"
        type="number"
        input={unitPrice}
        onChange={setUnitPrice}
      />
      <div className="flex w-[10rem] justify-between">
        <Button onClick={createObject} label="Submit" />
        <Button onClick={resetForm} label="Clear" />
      </div>
    </form>
  );
}
