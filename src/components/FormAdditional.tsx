export default function FormAdditionalAndBank() {
  return (
    <>
      <textarea
        name="other-info"
        placeholder="Other information (Optional)"
        className="border-box h-48 resize-none border border-gray-800 px-2"
      />
      <textarea
        name="bank-info"
        placeholder="Bank Information (Optional)"
        className="border-box h-48 resize-none border border-gray-800 px-2"
      />
    </>
  );
}
