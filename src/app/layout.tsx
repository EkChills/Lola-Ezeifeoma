import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omolola Ezeifeoma | Rooted in Truth, Walking in Grace",
  description: "Equipping the next generation and the women who lead them to find clarity and identity in God's Word. Christian author, minister, and Bible study teacher based in Lagos, Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}