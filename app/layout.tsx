import type { Metadata } from "next";
import { Noto_Sans as TextFont, BioRhyme as DisplayFont } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const headingFont = DisplayFont({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});
const contentFont = TextFont({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-content',
});

export const metadata: Metadata = {
  title: "Hi, I'm Alex Romo",
  description: "Your friendly neighborhood Web-Slinger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${contentFont.variable}`}>{children}</body>
    </html>
  );
}
