"use client";

import { useChat } from "ai/react";
import ReactMarkdown from "react-markdown";
import clsx from "clsx";
import React from "react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
    });

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="h-screen pt-10 space-y-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl">👋🏼 Selam</h2> <br /> Bu chatbot&apos;u canlı
          yayında yaptık! Bu chatbot sadece <strong>SPOR</strong> üzerine
          çalışıryor. Bu konu hakkında istediğin her şeyi sorabilirsin!
        </div>
        <div className="h-[600px] overflow-auto">
          <ul className="space-y-2">
            {messages.map((item, index) =>
              item.role == "user" ? (
                <li className="flex justify-end text-green-500" key={index}>
                  <p className="border border-gray-200 rounded-md p-4">
                    {item.content}
                  </p>
                </li>
              ) : (
                <li key={index}>
                  <article className="prose">
                    <div className="border border-gray-200 rounded-md p-4">
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>
                  </article>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="w-full bottom-12">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <input
                disabled={isLoading}
                placeholder="Hadi Konusalim, bir seyler yaz!"
                value={input}
                onChange={handleInputChange}
                type="text"
                className="border-2 rounded-md p-2 w-full"
              />
              <button className="bg-gray-200 p-1 rounded-md" type="submit">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
