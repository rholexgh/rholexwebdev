import "./globals.css";

import localFont from "next/font/local";
import type { Metadata } from "next";
import Navbar from "@/Components/nav-bar";
import FooterComponent from "@/Components/footer-component";

const myFont = localFont({
  src: [
    {
      path: "../public/Fonts/PolySans-Neutral.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Fonts/PolySans-Bulky.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Rholexgh Studios",
  description: "Professional Portrait | Retouching Studio.",
  openGraph: {
    title: "Rholexgh Studios — Portrait | Retouching Studio.",
    description: "Professional Portrait | Retouching Studio.",
    url: "https://www.rholexghstudios.com/",
    siteName: "Rholexgh Studios",
    images: "/Assets/img/me/iamjulius_s.png",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/public/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/public/android-chrome-192x192.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Rholexgh Studios — Portrait | Retouching Studio.",
    description: "Professional Portrait | Retouching Studio.",
    // creator: "@iamjulius.e",
    images: "/Assets/img/me/iamjulius_s.png",
  },
  // verification: {
  //   google: "",
  // },
  // creator: "Julius Eghan",
  // manifest: "/site.webmanifest",
  // keywords: ["Julius Eghan", "iamjulius", "juliuseghan", "iamjuliuseghan"],
  // themeColor: "#00030A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <Navbar />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
