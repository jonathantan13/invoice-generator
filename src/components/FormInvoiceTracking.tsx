export default function FormInvoiceTracking() {
  return (
    <div className="col-span-2 row-span-2 flex flex-col gap-2">
      <div className="flex flex-row">
        <label htmlFor="" className="w-32">
          Invoice No. :
        </label>
        <input type="text" className="border-box border border-gray-800 px-1" />
      </div>
      <div className="flex flex-row">
        <label htmlFor="" className="w-32">
          Invoice Date:
        </label>
        <input type="text" className="border-box border border-gray-800 px-1" />
      </div>
    </div>
  );
}
