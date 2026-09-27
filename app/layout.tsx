import type { Metadata } from "next";
import React from "react";
import { Space_Grotesk, DM_Mono, Instrument_Serif } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sree Gopal Saha | Developer, Builder & Mentor",
  description: "Sree Gopal Saha builds purposeful things on the internet. Explore links to GitHub, LinkedIn, portfolio, and more.",
  keywords: ["Sree Gopal Saha", "Developer", "Builder", "Mentor", "Software Engineer", "Web Development"],
  authors: [{ name: "Sree Gopal Saha" }],
  openGraph: {
    title: "Sree Gopal Saha | Developer, Builder & Mentor",
    description: "Sree Gopal Saha builds purposeful things on the internet.",
    url: "https://sreegopal.vercel.app",
    siteName: "Sree Gopal Saha",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Gopal Saha | Developer, Builder & Mentor",
    description: "Sree Gopal Saha builds purposeful things on the internet.",
    creator: "@sreegopalsaha",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>{children}</body>
      <GoogleAnalytics gaId="G-Q8NPGTNT8E" />
    </html>
  );
}
