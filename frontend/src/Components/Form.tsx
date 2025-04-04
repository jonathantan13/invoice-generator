import { useState } from "react";
import Field from "./Field";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-24 w-3xl drop-shadow-2xl"
    >
      <Field
        label="Description"
        value={description}
        setValue={setDescription}
      />
      <Field label="Quantity" value={quantity} setValue={setQuantity} />
      <Field label="Price" value={price} setValue={setPrice} />
    </form>
  );
}
