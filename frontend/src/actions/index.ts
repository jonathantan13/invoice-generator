"use server";

import { revalidatePath } from "next/cache";

export async function submitFormInput(
  formState: { message: string },
  formData: FormData,
): Promise<{ message: string }> {
  console.log(formData);

  const name = formData.get("name");
  const itemName = formData.get("itemName");
  const quantity = Number(formData.get("quantity"));
  const unitPrice = Number(formData.get("unitPrice"));

  if (typeof name !== "string" || name.length < 5)
    return { message: "Please make sure your name is correct." };

  if (typeof itemName !== "string" || itemName.length < 5)
    return { message: "Please make sure your item name is correct." };

  if (typeof quantity !== "number" || quantity < 1)
    return { message: "Please make sure you enter a quantity." };

  if (typeof unitPrice !== "number" || unitPrice < 1) {
    return { message: "Please make sure your item is at least $1." };
  }

  const item = {
    name,
    itemName,
    quantity,
    unitPrice,
  };

  console.log(item);

  revalidatePath("/");
  return { message: "Testing" };
}
