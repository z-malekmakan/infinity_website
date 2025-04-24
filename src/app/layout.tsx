import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import dynamic from "next/dynamic";
import ThemeContextProvider from "@/context/ThemeContext";
import BodyStyleManager from "@/components/BodyStyleManager";

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
        <ThemeContextProvider>
          <BodyStyleManager/>
          <Layout>{children}</Layout>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
