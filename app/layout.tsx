import type { Metadata } from "next";
import "./globals.css";
import AuthOverlay from "@/app/components/AuthOverlay";
import UserProvider from "./context/user";

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
      <UserProvider>
        <body>
          <AuthOverlay />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
