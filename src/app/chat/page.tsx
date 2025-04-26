"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

type Message = {
  id: string
  content: string
  sender: "user" | "ai"
}

export default function Page() {
  const { data: session } = useSession()

  const [messages, setMessages] = useState<Message[]>([
    { id: "1", content: "Hello! How can I help you today?", sender: "ai" },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "This is a simulated response from the AI assistant.",
        sender: "ai",
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-[100dvh] bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer gap-2 justify-center font-bold text-black">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white text-xs font-bold">
              C
            </div>
            CamBot
          </div>
          <div className="flex md:space-x-4 space-x-2 items-center">
            <Avatar>
              <AvatarFallback className="uppercase">{session?.user?.name?.at(0)}</AvatarFallback>
              <AvatarImage src={session?.user?.image || "/placeholder.svg"} />
            </Avatar>
            <Button
              className="cursor-pointer"
              onClick={() => {
                signOut({ callbackUrl: "/" })
              }}
            >
              Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Chat conversation area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "ai" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gray-200 text-gray-700">AI</AvatarFallback>
              </Avatar>
            )}

            <div
              className={`
                py-2 px-4 max-w-[80%] rounded-2xl shadow-sm
                ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-gray-100 text-gray-800 rounded-bl-none"
                }
              `}
            >
              <p className="break-words">{message.content}</p>
            </div>

            {message.sender === "user" && (
              <Avatar className="h-8 w-8">
                <AvatarFallback className="uppercase bg-primary/20 text-primary">
                  {session?.user?.name?.at(0) || "U"}
                </AvatarFallback>
                <AvatarImage src={session?.user?.image || "/placeholder.svg"} />
              </Avatar>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="sticky bottom-0 border-t bg-background p-4">
        <form onSubmit={handleSendMessage} className="flex space-x-2 max-w-3xl mx-auto items-center">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full py-6"
          />
          <Button type="submit" size="icon" className="rounded-full flex justify-center items-center">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
