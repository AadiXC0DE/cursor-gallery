import type { Metadata } from "next";
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
  title: "Cursor Gallery - Animated Cursors for React",
  description: "A beautiful collection of animated cursor pointers. Copy-paste ready for React, Next.js, and Vanilla JS.",
  keywords: ["react", "cursor", "animation", "framer motion", "ui design", "frontend"],
  authors: [{ name: "Cursor Gallery" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cursor-gallery.vercel.app",
    title: "Cursor Gallery - Animated Cursors",
    description: "Beautiful animated cursors, copy-paste ready for your next project.",
    siteName: "Cursor Gallery",
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
            </CursorProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
