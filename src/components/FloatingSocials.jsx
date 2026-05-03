import { useState, useRef, useEffect } from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { AiFillMessage } from "react-icons/ai";
import { IoClose, IoSend } from "react-icons/io5";

const ICON_BTN =
  "p-2 rounded-full transition-all hover:bg-cyan-500/20 hover:scale-110 hover:shadow-[0_0_12px_rgba(34,211,238,0.6)]";

export default function FloatingSocials() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hey! 👋 Ask me anything about my work, projects, or experience." },
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
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are a helpful assistant for Vincent Angelo Javier's portfolio website.
            You answer questions about his skills, projects, and experience.
            Keep responses short, friendly, and relevant to his portfolio.
            If you don't know something specific, encourage them to reach out via email or LinkedIn.`,
          messages: [
            ...messages
              .filter((m) => m.from !== "bot" || messages.indexOf(m) > 0)
              .map((m) => ({
                role: m.from === "user" ? "user" : "assistant",
                content: m.text,
              })),
            { role: "user", content: text },
          ],
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text ?? "Sorry, something went wrong.";
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Oops! Couldn't connect. Try reaching me via email." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating bar */}
      <div className="fixed z-50 bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0
        flex flex-row md:flex-col items-center gap-3
        bg-black/40 backdrop-blur-xl p-3 rounded-[2rem]
        border border-white/10 shadow-lg w-max">

        {/* Chat button */}
        <button onClick={() => setOpen(true)} className={ICON_BTN} aria-label="Open chat">
          <AiFillMessage className="text-white" size={22} />
        </button>

        {/* GitHub */}
        <a href="https://github.com/VJavier05" target="_blank" rel="noreferrer" className={ICON_BTN}>
          <SiGithub className="text-white" size={22} />
        </a>

        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=angelojavierjj@gmail.com"
          target="_blank" rel="noreferrer" className={ICON_BTN}>
          <SiGmail className="text-white" size={22} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vincent-angelo-javier-839241382"
          target="_blank" rel="noreferrer" className={ICON_BTN}>
          <SiLinkedin className="text-white" size={22} />
        </a>
      </div>

      {/* Chat modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center md:items-end md:justify-end p-4 md:p-6">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

          <div className="relative z-10 w-full max-w-sm flex flex-col
            bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            style={{ height: "420px" }}>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-white text-sm font-medium">Chat with me</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <IoClose size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[80%] text-sm px-3 py-2 rounded-xl ${
                  m.from === "user"
                    ? "self-end bg-cyan-500/20 text-white"
                    : "self-start bg-white/10 text-white/90"
                }`}>
                  {m.text}
                </div>
              ))}
              {loading && (
                <div className="self-start bg-white/10 text-white/50 text-sm px-3 py-2 rounded-xl">
                  Typing…
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2
                  text-sm text-white placeholder-white/30 outline-none
                  focus:border-cyan-500/50 transition-colors"
                placeholder="Ask something…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30
                  border border-cyan-500/30 text-cyan-400 transition-all disabled:opacity-40">
                <IoSend size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}