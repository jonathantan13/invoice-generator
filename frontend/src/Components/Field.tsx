type FieldProps<T> = {
  label: string;
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

export default function Field<T extends string | number>({
  label,
  value,
  setValue,
}: FieldProps<T>) {
  return (
    <div className="mx-4 mb-10 flex flex-col gap-4">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value as T)}
        className="border-2 bg-white hover:cursor-pointer"
      />
    </div>
  );
}
