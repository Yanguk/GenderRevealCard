import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  openGraph: {
    title: "몰리의 성별은?",
    description: "두근 두근",
    type: "website",
    url: "https://gender-reveal-card.vercel.app",
    images: [
      {
        url: "/thumbnail.png",
        alt: "몰리",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300/30`}
      >
        {children}
      </body>
    </html>
  );
}
