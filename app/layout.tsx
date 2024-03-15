import type { Metadata } from "next";
import { fonts } from './fonts'

export const metadata: Metadata = {
  title: "Alex Romo Portfolio",
  description: "Your friendly neighborhood web slinger",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.rubik.variable}>
      <body>{children}
      </body>
    </html>
  );
}
