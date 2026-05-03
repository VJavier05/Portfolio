import { useState, useRef, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoClose, IoSend } from "react-icons/io5";
import avatar from "../assets/logo.svg";

export default function ChatMe() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
  {
    from: "bot",
    text: "Hey! 👋 Curious about Vincent's work?\n\nI can walk you through his projects, skills, and certificates just ask!",
  },
]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

 async function sendMessage() { 
  const text = input.trim();
  if (!text || loading) return;

  setInput("");
  setMessages((prev) => [...prev, { from: "user", text }]);
  setLoading(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, history: messages }),
    });

    const data = await response.json();
    setMessages((prev) => [...prev, { from: "bot", text: data.reply }]);
  } catch (err) {
    console.error("Chat error:", err);
    setMessages((prev) => [
      ...prev,
      { from: "bot", text: "Oops! Something went wrong. Try reaching Vincent via email." },
    ]);
  } finally {
    setLoading(false);
  }
}

  return (
    <>
      {/* Trigger button — same glass style as FloatingSocials */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed bottom-6 right-6 z-50
          flex items-center gap-3
          bg-black/40 backdrop-blur-xl
          border border-white/10 hover:border-cyan-500/40
          rounded-[2rem] px-4 py-2.5
          transition-all duration-200 hover:bg-black/60
          shadow-lg w-max
        "
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-cyan-500/10 border border-cyan-500/20">
          <AiFillMessage className="text-cyan-400" size={16} />
        </div>
        <div className="text-left pr-1">
          <p className="text-[11px] text-white/40 leading-tight">say hello</p>
          <p className="text-sm font-medium text-white leading-tight">Chat with me</p>
        </div>
      </button>

      {/* Modal */}
      {open && (
        <div
            className={`
                fixed inset-0 z-50 flex items-end sm:items-end justify-center sm:justify-end p-4 sm:p-6
                transition-all duration-300
                ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
            >
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className={`
                absolute inset-0
           
            `}
            />

          {/* Modal panel — glass style */}
          <div className="
            relative z-10 w-full max-w-sm flex flex-col
            bg-black/80 backdrop-blur-xl
            border border-white/10
            rounded-2xl overflow-hidden
            shadow-[0_8px_32px_rgba(0,0,0,0.5)]
            h-[80vh] sm:h-[460px]
             sm:rounded-2xl rounded-t-2xl
          ">

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500/20">
                    <img
                        src={avatar}
                        alt="Vincent"
                        className="w-full h-full object-cover"
                    />
                    </div>
                <div>
                  <p className="text-white text-sm font-medium leading-tight">Vincent's Assistant</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[11px] text-white/40">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all"
              >
                <IoClose size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3
              [&::-webkit-scrollbar]:w-1
              [&::-webkit-scrollbar-track]:transparent
              [&::-webkit-scrollbar-thumb]:bg-white/10
              [&::-webkit-scrollbar-thumb]:rounded-full
            ">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-2 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  {m.from === "bot" && (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-cyan-500/20">
                        <img
                            src={avatar}
                            alt="Vincent"
                            className="w-full h-full object-cover"
                        />
                        </div>
                  )}
                  <div className={`
                    max-w-[78%] text-sm px-3.5 py-2.5 rounded-2xl leading-relaxed break-words whitespace-pre-wrap
                    ${m.from === "user"
                      ? "bg-cyan-500/20 text-white border border-cyan-500/20 rounded-tr-sm"
                      : "bg-white/8 text-white/85 border border-white/8 rounded-tl-sm"
                    }
                  `}>
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AiFillMessage className="text-cyan-400" size={11} />
                  </div>
                  <div className="bg-white/8 border border-white/8 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2 flex-shrink-0">
              <input
                className="
                  flex-1 bg-white/5 border border-white/10
                  rounded-xl px-3.5 py-2.5 text-sm text-white
                  placeholder-white/25 outline-none
                  focus:border-cyan-500/40 focus:bg-white/8
                  transition-all duration-200
                "
                placeholder="Ask me anything…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                disabled={loading}
                autoFocus
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="
                  p-2.5 rounded-xl flex items-center justify-center
                  bg-cyan-500/15 hover:bg-cyan-500/25
                  border border-cyan-500/30
                  text-cyan-400 transition-all duration-200
                  disabled:opacity-30 disabled:cursor-not-allowed
                  hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]
                "
              >
                <IoSend size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}