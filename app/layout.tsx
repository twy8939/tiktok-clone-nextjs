import type { Metadata } from "next";
import "./globals.css";
import AuthOverlay from "@/app/components/AuthOverlay";

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
      <body>
        <AuthOverlay />
        {children}
      </body>
    </html>
  );
}
