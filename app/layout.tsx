import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Hyperspace } from "@/components/hyperspace";
import { PersonalNav } from "@/components/personal-nav";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: { default: "João Vasconcelos", template: "%s | João Vasconcelos" },
  description:
    "I'm João Vasconcelos, a student shipping projects through Zule. Into coding, AI, engineering, cars, photography, music, and travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geist.variable}`}>
      <body>
        <Hyperspace />
        <PersonalNav />
        {children}
      </body>
    </html>
  );
}
