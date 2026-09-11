import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.freshhealthco.com"),
  title: {
    default: "Fresh Health Co | Trusted Health, Wellness & Product Reviews",
    template: `%s | Fresh Health Co`,
  },
  description: "Your ultimate destination for health, wellness, and evidence-based product reviews. Expert testing, transparent ratings, and wellness insights.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Fresh Health Co | Trusted Health & Wellness Reviews",
    description: "Your ultimate destination for health, wellness, and evidence-based product reviews.",
    url: "https://www.freshhealthco.com",
    type: "website",
    locale: "en_US",
    siteName: "Fresh Health Co",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fresh Health Co - Trusted Health & Wellness Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Health Co | Trusted Health & Wellness Reviews",
    description: "Your ultimate destination for health, wellness, and evidence-based product reviews.",
    images: ["/og-image.jpg"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
