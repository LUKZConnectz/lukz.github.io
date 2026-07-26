import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fusions Dashboard",
  description: "A Fusions-inspired dashboard built with Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
