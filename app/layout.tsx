import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";
import * as React from "react";

// 1. import `HeroUIProvider` component
import { HeroUIProvider } from "@heroui/react";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";

const mplusrounded1c = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

export const metadata: Metadata = {
  title: "ピラティス スタジオ L",
  description: "長野県松本市のリフォーマーピラティススタジオ",
  // metadataBase: new URL(baseURL),
  openGraph: {
    title: 'ピラティス スタジオ L',
    description: '長野県松本市のリフォーマーピラティススタジオ',
    url: baseURL,
    siteName: 'ピラティス スタジオ L',
    images: [
      {
        url: '/logo/studio-l-logo-side.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
};

const classNames = `${mplusrounded1c.className}  antialiased`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"ja-jp"}>

      <body
        className={classNames}
      >
        <HeroUIProvider>
          <Header />
          {children}
          <Footer />
        </HeroUIProvider>
      </body>
    </html>
  );
}
