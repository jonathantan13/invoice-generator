import { CreateInvoiceItemsProps } from "@/interfaces";

export default function FormSubtotal({
  invoiceItems,
}: CreateInvoiceItemsProps) {
  const totalPrice = invoiceItems.reduce(
    (acc, cur) => acc + Number(cur.unitPrice) * cur.quantity,
    0,
  );

  return (
    <div className="col-start-4 flex flex-row gap-3">
      <label>Subtotal:</label>
      <input
        type="text"
        name="subtotal"
        className="box-border w-full border border-gray-800 pl-2"
        readOnly
        value={`$${totalPrice}`}
      />
    </div>
  );
}
