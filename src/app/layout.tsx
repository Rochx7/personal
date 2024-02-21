import type { Metadata } from "next";
import { Inter, League_Spartan, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { montserrat } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "Personal portifoil",
  description: "",
  icons: {
    icon: "/public/favicon/favicon-16x16.png",
    shortcut: "/public/favicon/favicon-16x16.png",
    apple: "/public/favicon/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/public/favicon/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(montserrat.className, "bg-zinc-950 text-zinc-100")}>
        {children}
      </body>
    </html>
  );
}
