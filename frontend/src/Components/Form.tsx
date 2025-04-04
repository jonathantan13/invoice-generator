import { useState } from "react";
import Field from "./Field";
import axios from "axios";

export default function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const shipment = {
      description,
      quantity,
      price,
    };

    await axios.post("http://localhost:8000/generate-invoice", shipment);
    console.log("Shipment object sent off to port 8000");

    setDescription("");
    setQuantity(0);
    setPrice(0);
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
      <button>Submit</button>
    </form>
  );
}
