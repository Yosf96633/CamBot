import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat with CamBot",
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
  
      <div className=" ">
      
          {children}
       
      </div>
  
  );
}
