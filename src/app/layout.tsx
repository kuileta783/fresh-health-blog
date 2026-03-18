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
  title: {
    default: "Fresh Health Co",
    template: `%s | Fresh Health Co`,
  },
  description: "Your ultimate destination for health and wellness insights.",
  openGraph: {
    title: "Fresh Health Co",
    description: "Your ultimate destination for health and wellness insights.",
    type: "website",
    locale: "en_US",
    siteName: "Fresh Health Co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Health Co",
    description: "Your ultimate destination for health and wellness insights.",
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
