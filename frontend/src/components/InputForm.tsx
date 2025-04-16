"use client";

import React, { startTransition, useActionState } from "react";
import * as actions from "@/actions";

export default function InputForm() {
  const [formState, action, isPending] = useActionState(
    actions.submitFormInput,
    {
      message: "",
    },
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
    <form className="max-w-8xl flex flex-col" onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input name="name" type="text" className="border" />
      <div className="flex gap-8">
        <button
          type="submit"
          disabled={isPending}
          className="w-16 bg-blue-500 text-white hover:cursor-pointer"
        >
          Submit
        </button>
        <button type="reset" disabled={isPending}>
          Clear
        </button>
      </div>
      {formState.message}
    </form>
  );
}

{
  /* <div className="flex w-[10rem] justify-between">
  <Button onClick={createObject} label="Submit" />
  <Button onClick={resetForm} label="Clear" />
</div> */
}

/* <Input
  length="w-[20rem]"
  label="Your Name"
  type="text"
  input={name}
  onChange={setName}
  />
  */
