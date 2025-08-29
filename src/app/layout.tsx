import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chatify-privacy.vercel.app'),
  title: "Chatify - Connect with the World",
  description: "The ultimate random chat app that connects you with people worldwide. Start conversations, make new friends, and discover different cultures instantly.",
  keywords: "chat, random chat, social, messaging, global, friends",
  authors: [{ name: "Chatify Team" }],
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: 'any' },
      { url: '/favicon.png?v=2', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/favicon.png?v=2', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: "Chatify - Connect with the World",
    description: "The ultimate random chat app that connects you with people worldwide.",
    type: "website",
    images: [
      {
        url: '/ChatGPT Image Aug 28, 2025, 08_56_54 PM.png',
        width: 1200,
        height: 630,
        alt: 'Chatify Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chatify - Connect with the World',
    description: 'The ultimate random chat app that connects you with people worldwide.',
    images: ['/ChatGPT Image Aug 28, 2025, 08_56_54 PM.png'],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
