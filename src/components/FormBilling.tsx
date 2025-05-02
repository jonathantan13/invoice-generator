export default function FormBilling() {
  return (
    <>
      <input
        type="text"
        name="company-name"
        placeholder="Your company name"
        className="box-border border border-gray-800 px-2"
      />
      <input
        type="text"
        name="customer-name"
        placeholder="Who you are billing to"
        className="col-start-4 box-border border border-gray-800 px-2"
      />
      <textarea
        name="company-address"
        placeholder="Your company address"
        className="box-border h-28 resize-none border border-gray-800 px-2"
      />
      <textarea
        name="customer-address"
        placeholder="Customer address"
        className="col-start-4 box-border resize-none border border-gray-800 px-2"
      />
    </>
  );
}
