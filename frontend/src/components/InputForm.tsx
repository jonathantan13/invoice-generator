"use client";

import React, { startTransition, useActionState } from "react";
import * as actions from "@/actions";
import Input from "./Input";
import Button from "./Button";

export default function InputForm() {
  const [formState, action] = useActionState(actions.submitFormInput, {
    message: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
    <form className="max-w-8xl flex flex-col" onSubmit={handleSubmit}>
      <Input label="Name" name="name" length="w-[20rem]" type="text" />
      <Input label="Item Name" name="itemName" length="w-[20rem]" type="text" />
      <Input
        label="Quantity"
        name="quantity"
        length="w-[10rem]"
        type="number"
      />
      <Input
        label="Unit Price"
        name="unitPrice"
        length="w-[10rem]"
        type="number"
      />
      <div className="flex gap-8">
        <Button label="submit" />
        <Button label="clear" />
      </div>
      {formState.message && (
        <span className="bg-red-500 text-white">{formState.message}</span>
      )}
    </form>
  );
}
