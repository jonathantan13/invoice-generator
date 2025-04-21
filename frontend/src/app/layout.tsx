import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Invoice generator",
  description: "The easiest way to generate invoices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Header />
        {children}
      </body>
    </html>
  );
}
