import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "./provider";
import Header from "@/components/header";
import Search from "@/components/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie App",
  description: "A Movie Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Navbar />
        <Header />
        <Search />
        {children}
        </Providers>
      </body>
    </html>
  );
}
