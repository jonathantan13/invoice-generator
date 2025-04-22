"use server";

import { Item } from "@/interfaces";
import axios from "axios";

const PORT = "http://localhost:8000";

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
  if (list.length <= 0) return console.log("Cannot send off empty list");
  // TODO: Should validation be done in the backend? Figure that out

  const res = await axios.post(`${PORT}/generate-invoice`, { invoice: list });
  const data = res.data;

  console.log(data);
}
