"use client";

import { InputComponent } from "@/interfaces";

export default function Input<T extends string | number>({
  length = "w-[5rem]",
  label,
  type,
  input,
  onChange,
}: InputComponent<T>) {
  return (
    <div className={`mb-4 flex max-w-2xl flex-col`}>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        className={`${length} border px-1`}
        value={input}
        onChange={(e) => {
          const value =
            type === "number" ? Number(e.target.value) : e.target.value;
          onChange(value as T);
        }}
      />
    </div>
  );
}
