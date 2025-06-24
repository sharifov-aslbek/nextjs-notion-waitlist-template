import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartRing.uz",
  description:
    "Aqlli to’lovlar uchun Smart Ring!",
    icons: {
    icon: "/smartring.jpg", // <--- favicon joyi
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/smartring.jpg" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="Smartring.uz"
      />
      <meta
        property="og:url"
        content="https://smartring.uz/"
      />
      <meta name="twitter:image" content="/smartring.jpg" />
      <meta name="twitter:image:type" content="image/jpg" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
