"use client";

import Button from "./Button";
import Input from "./Input";

interface InputForm {
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
  setName: (value: string) => void;
  setItemName: (value: string) => void;
  setQuantity: (value: number) => void;
  setUnitPrice: (value: number) => void;
  createObject: () => void;
  resetForm: () => void;
}

export default function InputForm({
  name,
  itemName,
  quantity,
  unitPrice,
  setName,
  setItemName,
  setQuantity,
  setUnitPrice,
  createObject,
  resetForm,
}: InputForm) {
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
