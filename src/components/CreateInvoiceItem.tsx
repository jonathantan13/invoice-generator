export default function CreateInvoiceItem() {
  return (
    <>
      <input
        type="text"
        placeholder="Item Description"
        className="border-box border border-gray-800 px-2"
      />
      <input
        type="number"
        placeholder="Quantity"
        className="border-box border border-gray-800 px-2"
      />
      <input
        type="text"
        placeholder="Unit Price"
        className="border-box border border-gray-800 px-2"
      />
      <input
        type="text"
        placeholder="Total price"
        className="border-box border border-gray-800 px-2"
      />
    </>
  );
}
