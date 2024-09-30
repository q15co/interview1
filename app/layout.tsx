import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const font = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Title",
  description: "Project Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          font.className,
          "text-slate-700, bg-slate-100 dark:bg-slate-900 dark:text-slate-100",
        )}
      >
        {children}
      </body>
    </html>
  );
}
