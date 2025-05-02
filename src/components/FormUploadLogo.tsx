export default function FormUploadLogo() {
  return (
    <>
      <label
        htmlFor="upload-img"
        className="col-start-4 h-48 border border-gray-800 text-center text-2xl"
      >
        Add your logo
      </label>
      <input
        id="upload-img"
        type="file"
        name="logo"
        accept="image/*"
        className="hidden"
      />
    </>
  );
}
