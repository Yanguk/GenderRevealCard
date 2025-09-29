import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "몰리의 성별은?",
  description: "두근 두근",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <title>몰리의 성별은?</title>
        <meta property="og:title" content="몰리의 성별은?" />
        <meta property="og:description" content="두근 두근" />
        <meta property="og:image" content="" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300/30`}
      >
        {children}
      </body>
    </html>
  );
}
