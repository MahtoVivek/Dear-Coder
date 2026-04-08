import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Minus, X, Bot, User, Loader2, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "1",
  text: "Hello! I'm your Dear Coder Assistant. How can I help you today? I can tell you about our ₹1399 Landing Pages or our App Development services!",
  sender: "ai",
  timestamp: new Date(),
};

const KNOWLEDGE_BASE: Record<string, string> = {
  "landing page": "Our Landing Page websites start at just ₹1399! They include a modern responsive design, contact forms, and are optimized for speed.",
  "price": "Landing pages start at ₹1399. For custom web development or app development, please contact us for a detailed quote tailored to your business.",
  "website": "We build professional, fast, and responsive websites for all types of businesses. Our cheapest plan starts at ₹1399 for a landing page.",
  "app": "We develop high-performance mobile applications for both iOS and Android. Let us know what kind of app you have in mind!",
  "ai": "We specialize in AI Integration and chatbots to automate your business processes and improve efficiency.",
  "contact": "You can reach us via our contact form on the site, or directly via WhatsApp at +91 9472762864.",
  "hello": "Hello there! How can I assist you with your digital journey today?",
  "namaste": "नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ?",
};

export default function AiChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen, isMinimized]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let responseText = "That's a great question! For specific details, our team can help you better. Would you like to reach our experts via WhatsApp?";

      for (const [key, val] of Object.entries(KNOWLEDGE_BASE)) {
        if (lowerInput.includes(key)) {
          responseText = val;
          break;
        }
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 lg:right-24 z-50 flex flex-col items-end">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-[0_0_20px_rgba(var(--primary),0.4)] group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Bot className="w-8 h-8 relative z-10" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-background animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: "bottom right" }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? "64px" : "500px",
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={`w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] max-h-[calc(100vh-5rem)] glass-card rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-primary/20 transition-all duration-300 origin-bottom-right ${isMinimized ? 'pointer-events-none opacity-50 translate-y-16 scale-90' : ''}`}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50 flex items-center justify-between pointer-events-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Dear Coder AI</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-red-500/10 hover:text-red-500 rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 scrollbar-hide pointer-events-auto">
                  {messages.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, x: m.sender === "user" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] flex gap-2 ${m.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                        <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-[10px] ${m.sender === "user" ? "bg-accent text-white" : "bg-primary/20 text-primary"}`}>
                          {m.sender === "user" ? <User size={16} /> : <Sparkles size={16} />}
                        </div>
                        <div className={`p-3 rounded-2xl text-sm ${m.sender === "user"
                          ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10"
                          : "bg-muted/50 backdrop-blur-md border border-border/50 rounded-tl-none"
                          }`}>
                          {m.text}
                          <div className={`text-[10px] mt-1 opacity-50 ${m.sender === "user" ? "text-right" : "text-left"}`}>
                            {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                      <div className="bg-muted/50 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                        <span className="text-xs text-muted-foreground font-medium italic">Dear AI is thinking...</span>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSend} className="p-4 border-t border-border/50 bg-background/50 backdrop-blur-md pointer-events-auto">
                  <div className="relative">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about ₹1399 Landing Pages..."
                      className="w-full bg-muted/30 border border-border/50 hover:border-primary/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl py-3 px-4 pr-12 text-sm outline-none transition-all"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center hover:scale-110 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all shadow-lg shadow-primary/30"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
