"use client";

interface Input {
  length: string | undefined;
  type: string | undefined;
  label: string;
  name: string;
}

export default function Input({
  length = "w-[5rem]",
  type = "text",
  label,
  name,
}: Input) {
  return (
    <div className={`mb-4 flex max-w-2xl flex-col`}>
      <label>{label}</label>
      <input type={type} name={name} className={`${length} border px-1`} />
    </div>
  );
}
