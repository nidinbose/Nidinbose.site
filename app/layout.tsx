import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from './Components/LandingUtilities/Navbar'
import Footer from './Components/LandingUtilities/Footer'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidinbose",
  description: "Connect me for works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex-grow`}
      >
        <header>
       <Navbar/>
        </header>

        <main>
        {children}
        </main>
        <footer className="min-h-full bg-white flex flex-col justify-end items-end p-4">
         <Footer/>
</footer>

      </body>
    </html>
  );
}
