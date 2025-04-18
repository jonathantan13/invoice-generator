"use server";

import axios from "axios";

const PORT = "http://localhost:8000";

interface Item {
  id: string;
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

export default async function submitList(formData: FormData) {
  const list: Item[] = [];

  for (const [key, value] of formData.entries()) {
    if (key.startsWith("item-")) {
      if (typeof value == "string") {
        const obj = JSON.parse(value);
        list.push(obj);
      }
    }
  }
  //It's ready to ship off to the API now
  if (list.length <= 0) return console.log("Cannot send off empty list");

  const res = await axios.post(`${PORT}/generate-invoice`, { invoice: list });
  const data = res.data;

  console.log(data);
}
