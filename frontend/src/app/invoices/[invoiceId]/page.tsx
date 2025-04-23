import { auth } from "@/auth";
import { InvoiceProps } from "@/interfaces";

export default async function Invoice({ params }: InvoiceProps) {
  const session = await auth();
  const { invoiceId } = await params;

  if (!session) {
    return <div>You&apros;re not authenticated to view this invoice!</div>;
  } else {
    return <div>Page id: {invoiceId}</div>;
  }
}
