"use client";

import Image from "next/image";
import { Card } from "./card";
import { useChat } from "ai/react";
import { Button } from "./button";
import Markdown from "react-markdown";
import { Textarea } from "./textarea";
import { SendIcon, SendToBack } from "lucide-react";


export default function Chat() {

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "api/chat",
      initialMessages: [
        {
          id: "weolcome-message",
          role: "assistant",
          content: "Hola! Soy Gemini-kun, tu asistente virtual. ¿En que puedo ayudarte el día de hoy?"
        }
      ]
    });

  return (
    <section className="max-w-7xl mt-2 w-full px-4 md:px-16 mx-auto">
      <Card className="px-1 mx-auto max-w-3xl">
        <header className="flex m-3 bg-violet-500 py-1 rounded-full bg-opacity-10 sticky top-0 z-10">
          <Image
            src="/assets/profile.webp"
            width={50}
            height={50}
            alt="image"
            className="aspect-square mx-2 overflow-hidden object-cover object-center rounded-full"
          />
          <div className="flex flex-col">
            <h1 className="text-center font-sans text-2xl">Gemini-kun</h1>
            <p className="text-start font-sans text-sm text-green-600 font-light">
              online.
            </p>
          </div>
        </header>
        <div className="mx-3 mt-5 h-[360px] overflow-y-auto">
          {messages.map((message) =>
            message.role === "assistant" ? (
              <div key={message.id} className="flex items-start gap-3">
                <div className="p-2 border border-gray-700 rounded-full">
                  <Image src="/assets/ai.png" alt="AI" width={20} height={20} />
                </div>
                <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                  <Markdown className="text-sm text-muted-foreground">
                    {message.content}
                  </Markdown>
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex justify-end">
                <div className="bg-primary rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm text-primary-foreground">
                    {message.content}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        <div >
          <form onSubmit={handleSubmit} className="m-3 flex flex-col justify-center items-center">
            <Textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Ask something..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e)
                }
              }}
            />
            {!isLoading ? (
              <Button
                type="submit"
                size="icon"
                disabled={!input || isLoading}
                className="w-20 mt-2"
              >
                <SendIcon className="h-4 w-4" />
                <span>Send</span>
              </Button>
            ) : (
              <Button
                type="button"
                size="icon"
                disabled={!isLoading}
                onClick={stop}
                className="mt-2 flex items-center"
              >
                <SendToBack className="h-4 w-4" fill="white" />
                <span className="sr-only">Send</span>
              </Button>
            )}
          </form>
        </div>
      </Card>
    </section>
  );
}