import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CamBot",
  description: "AI Chatbot - Resolve Campus Query",
  icons:{
    icon:"gif.gif"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
     
      >
        {children}
      </body>
    </html>
  );
}
