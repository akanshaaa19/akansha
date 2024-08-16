import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./(components)/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akansha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full sm:px-0 px-8 sm:w-[40%] mx-auto py-12">
          <NavBar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
