import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { HeroUIProvider } from "@heroui/react";
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
        <HeroUIProvider>
          <Toaster />
          <Header />
          {children}
        </HeroUIProvider>
      </body>
    </html>
  );
}
