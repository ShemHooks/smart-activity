import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Activity | Moving Business Forward",
  description:
    "Smart Activity for Business Solutions — integrated recruitment, telecommunications, project management, marketing, design and financial consulting.",
  openGraph: {
    title: "Smart Activity | Moving Business Forward",
    description:
      "Your partner in greater possibilities and sustainable success.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
