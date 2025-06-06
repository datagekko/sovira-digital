import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sovira Digital - Premium Shopify Stores in 14 Days",
  description: "The premier Shopify consultancy for momentum fashion & wellness brands. Launch beautiful, high-converting stores in 14 days or less. 90-Day Payback Guarantee.",
  keywords: "Shopify, ecommerce, fashion brands, wellness brands, conversion optimization, CRO, Shopify Plus",
  openGraph: {
    title: "Sovira Digital - Premium Shopify Stores in 14 Days",
    description: "Launch beautiful, high-converting Shopify stores in 14 days or less. Built for €1-1.5M fashion & wellness brands.",
    type: "website",
    locale: "en_US",
    url: "https://sovira.digital",
    siteName: "Sovira Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovira Digital - Premium Shopify Stores in 14 Days",
    description: "Launch beautiful, high-converting Shopify stores in 14 days or less.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
