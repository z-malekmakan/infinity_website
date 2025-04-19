import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Infinity",
  description: "created by Zitta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
