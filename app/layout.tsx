import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });
const font=Nunito({
    subsets:["latin"]
})
export const metadata: Metadata = {
  title: "AirBnb",
  description: "AirBnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
