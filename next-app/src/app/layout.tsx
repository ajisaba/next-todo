import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import Link from "next/link";

const cnTopItem = clsx(
  "h-full p-2 border-r-2 border-white border-solid align-middle"
);

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
      <body>
        <header className="h-[40px] w-full bg-blue-500 flex items-center text-white font-bold">
          <div id="header-menu" className={cnTopItem}>
            <Link id="header-menu-top" href="/">
              Top
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
