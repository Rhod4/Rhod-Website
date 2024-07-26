import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/navigation/main-nav";
import MainFooter from "@/components/footer/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rhodri Smith",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" h-full">
      <body className={`${inter.className} flex flex-col justify-between h-full`}>
        <MainNav></MainNav>
        <div className={"px-10"}>{children}</div>
        <MainFooter></MainFooter>
      </body>
    </html>
  );
}
