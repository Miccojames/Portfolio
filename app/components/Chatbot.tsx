"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, Send } from "lucide-react";

const ChatIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
  </svg>
);

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", sender: "bot", text: "Hi! I'm Micco's personal AI assistant. You can ask me questions about his background, age, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const getBotResponse = (question: string) => {
    const q = question.toLowerCase();
    
    if (q.includes("how old") || q.includes("age")) {
      return "Micco is 21 years old.";
    }
    if (q.includes("who are you") || q.includes("your name")) {
      return "I am an AI assistant hardcoded to answer questions about Micco James Ang.";
    }
    if (q.includes("who is micco") || q.includes("what do you do") || q.includes("profession")) {
      return "Micco James Ang is a passionate Frontend & Web Developer who builds modern, responsive, and user-focused web applications.";
    }
    if (q.includes("study") || q.includes("school") || q.includes("college") || q.includes("university") || q.includes("student")) {
      return "He is currently studying BS Information Technology at Cordova Public College (started in 2023).";
    }
    if (q.includes("skills") || q.includes("tech") || q.includes("stack") || q.includes("technologies")) {
      return "Micco specializes in React, Next.js, Tailwind CSS, JavaScript, and Node.js. He's also experienced with PHP, MySQL, and PostgreSQL.";
    }
    if (q.includes("project") || q.includes("portfolio") || q.includes("work")) {
      return "He has built several projects including FitFinder (GymOS), an AI Academic Schedule Reminder, an E-Commerce site, and a Student Management System. Check out the Projects section for details!";
    }
    if (q.includes("interest") || q.includes("hobbies") || q.includes("hobby") || q.includes("free time")) {
      return "In his free time, Micco loves exploring new web technologies, designing UI/UX concepts, and continuously learning about full-stack development.";
    }
    if (q.includes("love")) {
      return "Micco loves coding and building web apps, but beyond the screen, he loves doing activities outside like running, playing basketball, and exploring the world!";
    }
    if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("social") || q.includes("website") || q.includes("build") || q.includes("freelance") || q.includes("make me")) {
      return "If you want him to build a website for you or just want to connect, you can easily reach out through the Contact form below! You can also find him on GitHub and LinkedIn.";
    }
    
    return "I'm sorry, I only answer personal details about Micco James Ang. Try asking about his hobbies, skills, education, or how to hire him!";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: input,
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: getBotResponse(userMessage.text),
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-96 max-h-[80vh] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">
          {/* Header */}
          <div className="bg-gray-900 dark:bg-black p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
                <ChatIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Micco's AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span className="text-xs text-gray-300">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-700 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[350px] overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50 dark:bg-gray-900/50">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === "user" 
                      ? "bg-gray-900 dark:bg-white text-white dark:text-black rounded-tr-sm" 
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-sm shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSend}
            className="p-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about Micco..."
              className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
            <button 
              type="submit"
              disabled={!input.trim()}
              className="bg-gray-900 dark:bg-white text-white dark:text-black p-2.5 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce hover:animate-none group"
        >
          <ChatIcon className="w-8 h-8 text-gray-900 dark:text-white" />
        </button>
      )}
    </div>
  );
}
