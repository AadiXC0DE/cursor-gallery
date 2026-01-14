import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorProvider } from "@/components/cursor/cursor-context";
import { CursorEngine } from "@/components/cursor/cursor-engine";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cursor-gallery.vercel.app"),
  title: "Cursor Gallery -Premium Animated Cursors for React",
  description:
    "A curated collection of high-end animated cursors. Engineered for performance, designed for impact. Copy-paste ready for React, Next.js, and Vanilla JS.",
  keywords: [
    "react",
    "cursor",
    "animation",
    "framer motion",
    "ui design",
    "frontend",
    "animated cursors",
    "custom pointer",
    "web design",
  ],
  authors: [{ name: "Aadi Chowdhury" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cursor-gallery.vercel.app",
    title: "Cursor Gallery - Premium Animated Cursors",
    description:
      "Elevate your web UX with beautiful animated cursors, copy-paste ready for your next project.",
    siteName: "Cursor Gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursor Gallery - Premium Animated Cursors",
    description: "Elevate your web UX with beautiful animated cursors, copy-paste ready for your next project.",
    creator: "@AadiChowdhury7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorProvider>
            <CursorEngine />
            {children}
            <Analytics />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
