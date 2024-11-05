import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const cnTopItem = clsx("h-full p-2 border-r-2 border-white border-solid align-middle");

export const metadata: Metadata = {
  title: "Next-Todo",
  description: "Next-Todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="h-[40px] w-full bg-blue-500 flex items-center text-white font-bold">
          <div id="top-menu" className={cnTopItem}>
            <Link id="top-menu-home" href="/">Home</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
