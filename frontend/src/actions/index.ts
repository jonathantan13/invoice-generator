"use server";

interface Item {
  id: string;
  name: string;
  itemName: string;
  quantity: number;
  unitPrice: number;
}

export default async function submitForm(data: FormData) {
  const list: Item[] = [];

  for (const [key, value] of data.entries()) {
    if (key.startsWith("item-")) {
      if (typeof value == "string") {
        const obj = JSON.parse(value);
        list.push(obj);
      }
    }
  }

  console.log(list);
  //It's ready to ship off to the API now
}
