export default function CreateInvoiceItem() {
  return (
    <div className="grid grid-cols-4">
      <h2>Items</h2>
      <h2>Quantity</h2>
      <h2>Unit Price</h2>
      <h2>Total Price</h2>
      <input type="text" placeholder="Item Description" />
      <input type="text" placeholder="Quantity" />
      <input type="text" placeholder="Unit Price" />
      <input type="text" placeholder="Total price" />
    </div>
  );
}
