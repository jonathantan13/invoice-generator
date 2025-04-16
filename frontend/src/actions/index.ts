"use server";

export async function submitFormInput(
  formState: { message: string },
  formData: FormData,
): Promise<{ message: string }> {
  console.log(formData);

  const name = formData.get("name");

  if (typeof name !== "string" || name.length < 5)
    return { message: "It has to be a string!" };

  return { message: "Testing" };
}

// function createObject() {
//   if (!name || !itemName || !quantity || !unitPrice)
//     return console.log("Please do not leave anything out!");

//   const item = {
//     name,
//     itemName,
//     quantity,
//     unitPrice,
//   };

//   setItems((items) => [...items, item]);
//   resetForm();
// }
