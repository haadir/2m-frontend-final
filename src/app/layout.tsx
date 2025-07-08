import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gtAmericaStandard = localFont({
  src: [
    {
      path: "../../public/fonts/GT-America-Standard-Thin-Trial.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-America-Standard-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-America-Standard-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-America-Standard-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gt-america-standard",
  display: "swap",
});

const gtAmericaMono = localFont({
  src: [
    {
      path: "../../public/fonts/GT-America-Mono-Thin-Trial.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-America-Mono-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-America-Mono-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-gt-america-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2M",
  description: "An AI-powered CS2 marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gtAmericaStandard.variable} ${gtAmericaMono.variable}`}> 
      <body className={gtAmericaStandard.className}>{children}</body>
    </html>
  );
}
