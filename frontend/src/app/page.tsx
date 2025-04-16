import InputForm from "@/components/InputForm";
import List from "@/components/List";

export default function Home() {
  return (
    <div className="mx-auto mt-8 flex max-w-4xl justify-between">
      <List />
      <InputForm />
    </div>
  );
}
