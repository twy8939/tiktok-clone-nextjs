import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TitTok Clone",
  description: "TitTok Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
