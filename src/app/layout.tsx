import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TEDx Assam University",
  description: "Official website for TEDx Assam University. Discover speakers, schedule, team, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo1.ico" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white transition-colors duration-300`}>
        <Navbar/>
        <main className="min-h-[calc(100vh-64px)] font-[Anton]">{children}</main>
      </body>
    </html>
  );
}
