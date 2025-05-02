export default function FormSubtotal() {
  return (
    <div className="col-start-4 flex flex-row gap-3">
      <label htmlFor="">Subtotal:</label>
      <input type="text" className="border border-gray-800" disabled />
    </div>
  );
}
