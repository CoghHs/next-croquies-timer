import type { Metadata } from "next";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "@/provider/AppProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <AppProvider>
          <header className="flex justify-between items-center px-10 text-black h-20 text-lg font-bold   ">
            <div className="">
              <Link href="/">Home</Link>
            </div>
            <div className="space-x-10">
              <Link href="/croquies">Croquies</Link>
              <Link href="/about">About</Link>
            </div>
          </header>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
