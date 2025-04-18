"use server";

interface InvoiceProps {
  params: Promise<{ id: string }>;
}

export default async function Invoice(props: InvoiceProps) {
  const { id } = await props.params;

  return <div>Page id: {id}</div>;
}
