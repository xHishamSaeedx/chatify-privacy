import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatify - Connect with the World",
  description: "The ultimate random chat app that connects you with people worldwide. Start conversations, make new friends, and discover different cultures instantly.",
  keywords: "chat, random chat, social, messaging, global, friends",
  authors: [{ name: "Chatify Team" }],
  openGraph: {
    title: "Chatify - Connect with the World",
    description: "The ultimate random chat app that connects you with people worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
