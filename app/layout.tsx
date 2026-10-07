import type { Metadata, Viewport } from "next";
import { profile } from "@/config/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(profile.metadata.canonical),
  title: profile.metadata.title,
  description: profile.metadata.description,
  alternates: {
    canonical: profile.metadata.canonical,
  },
  openGraph: {
    title: profile.metadata.title,
    description: profile.metadata.description,
    url: profile.metadata.canonical,
    siteName: profile.company,
    images: [
      {
        url: profile.socialImage,
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.company}`,
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.metadata.title,
    description: profile.metadata.description,
    images: [profile.socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060708",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
