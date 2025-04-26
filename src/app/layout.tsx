import type { Metadata } from "next";
import "./globals.css";
import SessProvider from "@/context/SessProvider";

export const metadata: Metadata = {
  title: "CamBot",
  description: "AI Chatbot - Resolve Campus Query",
  icons: {
    icon: "gif.gif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessProvider>{children}</SessProvider>
      </body>
    </html>
  );
}
