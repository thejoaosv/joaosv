import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Vasconcelos | Personal Area",
  description:
    "A quiet personal area for João Vasconcelos: coding, AI, engineering, cars, photography, music, travel, and links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body>{children}</body>
    </html>
  );
}
