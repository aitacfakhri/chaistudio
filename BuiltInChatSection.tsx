"use client";

import { useState } from "react";
import {
  MessageSquare,
  Paperclip,
  Send,
  Mic,
  FileText,
  Play,
  Pause,
  Image as ImageIcon,
  CheckCheck,
} from "lucide-react";

export default function BuiltInChatSection() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Nicat Əliyev",
      isMe: false,
      text: "Salam! Layihənizin ilkin brendinq və UI/UX konseptlərini hazırladım. Faylları aşağıda əlavə edirəm.",
      time: "14:15",
      type: "text",
    },
    {
      id: 2,
      sender: "Nicat Əliyev",
      isMe: false,
      text: "",
      time: "14:16",
      type: "voice",
      duration: "0:42",
    },
    {
      id: 3,
      sender: "Müştəri (Siz)",
      isMe: true,
      text: "Təşəkkür edirəm! Rəng palitrası və şriftlər tam istədiyimiz kimidir. Bir az tünd kontrast əlavə edə bilərikmi?",
      time: "14:18",
      type: "text",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "Müştəri (Siz)",
      isMe: true,
      text: inputVal,
      time: "İndi",
      type: "text",
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal("");

    // Simulated reply after 1.5 seconds
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "Nicat Əliyev",
          isMe: false,
          text: "Əla təklifdir! Tünd kontrastı tənzimləyib 10 dəqiqəyə yenilənmiş Figma linkini göndərirəm.",
          time: "İndi",
          type: "text",
        },
      ]);
    }, 1200);
  };

  return (
    <section id="chat" className="py-24 bg-[#0e0e13]/70 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description in Azerbaijani */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>DAXİLİ TƏHLÜKƏSİZ MESENCER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Mütəxəssislə <span className="purple-glow-text">birbaşa və rahat</span> ünsiyyət
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              WhatsApp və ya üçüncü tərəf tətbiqlərə ehtiyac yoxdur. Bütün mesajlaşma, səsli qeydlər, dizayn faylları və düzəlişlər vahid qorunan daxili platformada cəmlənir.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div className="bg-[#121218] p-3 rounded-xl border border-white/5 flex items-center gap-2 text-zinc-300">
                <Mic className="w-4 h-4 text-purple-400" /> Səsli Mesajlar
              </div>
              <div className="bg-[#121218] p-3 rounded-xl border border-white/5 flex items-center gap-2 text-zinc-300">
                <ImageIcon className="w-4 h-4 text-indigo-400" /> 4K Şəkil & Video
              </div>
              <div className="bg-[#121218] p-3 rounded-xl border border-white/5 flex items-center gap-2 text-zinc-300">
                <FileText className="w-4 h-4 text-emerald-400" /> PDF, Word, ZIP
              </div>
              <div className="bg-[#121218] p-3 rounded-xl border border-white/5 flex items-center gap-2 text-zinc-300">
                <CheckCheck className="w-4 h-4 text-fuchsia-400" /> Oxundu Bildirişi
              </div>
            </div>
          </div>

          {/* Right Messenger Mockup UI */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-purple-500/30 shadow-2xl relative">
              {/* Chat Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                      alt="Nicat Əliyev"
                      className="w-10 h-10 rounded-full object-cover border border-purple-500/40"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#18181F]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Nicat Əliyev</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300">
                        Senior UI/UX
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Onlayn • Cavab müddəti: ~5 dəq
                    </div>
                  </div>
                </div>

                <div className="text-xs text-zinc-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                  Layihə: #CS-89201
                </div>
              </div>

              {/* Chat Messages Area */}
              <div className="py-5 space-y-4 max-h-[320px] overflow-y-auto pr-1">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${m.isMe ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm ${
                        m.isMe
                          ? "bg-purple-600 text-white rounded-br-none"
                          : "bg-[#18181F] text-zinc-200 border border-white/10 rounded-bl-none"
                      }`}
                    >
                      {m.type === "text" && <p>{m.text}</p>}
                      {m.type === "voice" && (
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                            className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center text-purple-300 hover:bg-purple-500/50"
                          >
                            {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                          </button>
                          <div className="flex items-center gap-1">
                            <span className="w-1 h-3 bg-purple-400 rounded-full animate-pulse" />
                            <span className="w-1 h-5 bg-purple-400 rounded-full animate-pulse" />
                            <span className="w-1 h-2 bg-purple-400 rounded-full" />
                            <span className="w-1 h-6 bg-purple-400 rounded-full animate-pulse" />
                            <span className="w-1 h-4 bg-purple-400 rounded-full" />
                            <span className="text-[11px] text-zinc-400 ml-2">{m.duration}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-zinc-500 mt-1 px-1">{m.time}</span>
                  </div>
                ))}
              </div>

              {/* Attachments preview row */}
              <div className="py-2 px-3 bg-black/40 rounded-xl border border-white/5 flex items-center gap-3 text-xs mb-3">
                <div className="flex items-center gap-1.5 text-purple-300">
                  <FileText className="w-3.5 h-3.5" />
                  <span>brandbook_v1.fig</span>
                </div>
                <div className="flex items-center gap-1.5 text-indigo-300">
                  <FileText className="w-3.5 h-3.5" />
                  <span>logo_assets.zip</span>
                </div>
              </div>

              {/* Input Box Form */}
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Mesajınızı və ya düzəlişinizi bura yazın..."
                  className="flex-1 bg-[#121218] border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-500 outline-none"
                />
                <button
                  type="submit"
                  className="glow-btn px-4 py-3 rounded-xl text-white font-medium flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
