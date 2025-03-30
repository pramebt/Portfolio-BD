import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";



const quicksand = Quicksand({
 
  subsets: ["latin"], weight:["400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Portfolio - BD",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${quicksand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
