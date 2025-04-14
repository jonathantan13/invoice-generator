"use client";

import InputForm from "@/components/InputForm";
import List from "@/components/List";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);

  function resetForm() {
    setName("");
    setItemName("");
    setQuantity(0);
    setUnitPrice(0);
  }

  return (
    <div className="mx-auto mt-8 flex max-w-4xl justify-between">
      <List />
      <InputForm
        name={name}
        itemName={itemName}
        quantity={quantity}
        unitPrice={unitPrice}
        setName={setName}
        setItemName={setItemName}
        setQuantity={setQuantity}
        setUnitPrice={setUnitPrice}
        resetForm={resetForm}
      />
    </div>
  );
}
