// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

// metadata with comprehensive SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://md-jaker.vercel.app"),
  title: {
    default: "MD Jaker Hossain - Software Engineer & Full-Stack Developer",
    template: "%s | MD Jaker Hossain Portfolio",
  },
  description:
    "MD Jaker Hossain is a full-stack software engineer specializing in React, Next.js, TypeScript, and scalable web applications. 1.5+ years of experience building user-centered digital solutions.",
  keywords: [
    "software engineer",
    "full-stack developer",
    "react developer",
    "next.js developer",
    "typescript developer",
    "web developer",
    "frontend developer",
    "backend developer",
    "javascript developer",
    "portfolio",
    "Feni developer",
    "remote software engineer",
    "web performance",
    "accessible web applications",
  ],
  authors: [
    {
      name: "MD Jaker Hossain",
      url: "https://md-jaker.vercel.app",
    },
  ],
  creator: "MD Jaker Hossain",
  publisher: "MD Jaker Hossain",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Open Graph for social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://md-jaker.vercel.app",
    title: "MD Jaker Hossain - Software Engineer Portfolio",
    description:
      "Full-stack developer creating accessible, user-centered digital experiences using modern web technologies.",
    siteName: "MD Jaker Hossain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MD Jaker Hossain Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MD Jaker Hossain - Software Engineer",
    description:
      "Full-stack developer creating accessible, scalable web applications with React, Next.js, and TypeScript.",
    images: ["/og-image.png"],
    creator: "@mdjaker_dev", // replace with real Twitter if available
    site: "@mdjaker_dev",
  },

  // Robots
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

  // Verification placeholders (replace with real codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3b82f6",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Alternates
  alternates: {
    canonical: "https://md-jaker.vercel.app",
    languages: {
      "en-US": "https://md-jaker.vercel.app",
    },
  },

  // Additional metadata
  category: "technology",
  classification: "Software Development Portfolio",
  abstract:
    "Portfolio of MD Jaker Hossain, a full-stack software engineer building accessible, scalable, and user-centered web applications.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
