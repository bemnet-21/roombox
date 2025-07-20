import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Lexend_Zetta } from "next/font/google";
import "../assets/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const lexendFont = Lexend_Zetta({
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "RoomBox | Book a Room",
  description: "Book a meeting or conference room for your team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lexendFont.className}
      >
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
