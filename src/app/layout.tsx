import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorProvider } from "@/components/cursor/cursor-context";
import { CursorEngine } from "@/components/cursor/cursor-engine";
import { CURSORS } from "@/registry/cursors";

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
  title: {
    default: "Cursor Gallery: animated cursors for React and Next.js",
    template: "%s | Cursor Gallery",
  },
  description: `${CURSORS.length} animated cursors for React and Next.js, built with Motion. Hover to try one, then install it with the shadcn CLI. Free and MIT licensed.`,
  keywords: [
    "animated cursors",
    "custom cursor",
    "custom cursor react",
    "react cursor component",
    "nextjs custom cursor",
    "shadcn cursor",
    "shadcn registry",
    "framer motion cursor",
    "animated mouse pointer",
    "cursor effects",
    "cursor animation library",
    "custom pointer css",
    "mouse trail effect",
    "react",
    "next.js",
    "framer motion",
    "ui design",
    "micro-interactions",
    "web design",
    "frontend",
  ],
  authors: [{ name: "Aadi Chowdhury", url: "https://heyaadi.com" }],
  creator: "Aadi Chowdhury",
  publisher: "Cursor Gallery",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cursor-gallery.vercel.app",
    title: "Cursor Gallery: animated cursors for React and Next.js",
    description:
      "Your pointer is on screen all day. Give it something to do. Hover to try, then install with the shadcn CLI.",
    siteName: "Cursor Gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursor Gallery: animated cursors for React",
    description:
      "Your pointer is on screen all day. Give it something to do. Hover to try, then install with the shadcn CLI.",
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
