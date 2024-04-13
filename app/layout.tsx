import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modal/Modal";
import RegisterModal from "./components/modal/RegisterModal";

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
        {/* <ClientOnly> */}
          <RegisterModal/>
          <Navbar/>
        {/* </ClientOnly> */}
        {children}
        </body>
    </html>
  );
}
