import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://useros.local"),
  title: {
    default: "UserOS — Customer understanding before you build",
    template: "%s · UserOS",
  },
  description:
    "UserOS turns startup ideas, interviews, reviews, Reddit posts, support tickets, and messy founder notes into a clear customer intelligence report, MVP roadmap, and product strategy.",
  applicationName: "UserOS",
  keywords: [
    "customer intelligence",
    "founder tools",
    "MVP discovery",
    "user research",
    "startup strategy",
    "product discovery",
  ],
  authors: [{ name: "UserOS" }],
  openGraph: {
    type: "website",
    title: "UserOS — Build what users actually want",
    description:
      "The customer understanding layer for the AI startup era. Map your first 100 users before you ship the wrong MVP.",
    siteName: "UserOS",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UserOS — Customer understanding before you build",
    description:
      "Fall in love with the user before you fall in love with the product. Reports, roadmaps, and interview questions from real signals.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030711",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body
        className={`min-h-screen bg-os-bg ${jakarta.className} font-sans antialiased text-slate-50 ${jetbrains.variable}`}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
