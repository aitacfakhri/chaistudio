"use client";

import { Smartphone, Bell, MessageSquare, CreditCard, Clock, CheckCircle2 } from "lucide-react";

export default function MobileAppSection() {
  const appFeatures = [
    { title: "Layihə yarat", desc: "Telefonunuzdan saniyələr içində brif və faylları yükləyin.", icon: Smartphone },
    { title: "Mesajlaş", desc: "Dizaynerlə birbaşa səsli qeydlər və mesajlar mübadiləsi.", icon: MessageSquare },
    { title: "Status izləmə", desc: "İşin hər mərhələsində telefonunuza canlı yenilənmə gəlsin.", icon: Clock },
    { title: "Ödəniş", desc: "Apple Pay və bank kartı ilə bir toxunuşla təhlükəsiz depozit.", icon: CreditCard },
    { title: "Bildirişlər", desc: "İlk versiya hazır olan kimi anında bildiriş alın.", icon: Bell },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: App Features in Azerbaijani */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
              <Smartphone className="w-3.5 h-3.5 text-purple-400" />
              <span>MOBİL TƏTBİQ (iOS & ANDROID)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bütün yaradıcı proses <br />
              <span className="purple-glow-text">cibinizdə və nəzarətinizdə.</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              İstər ofisdə, istər səfərdə olun — Chai Studio mobil tətbiqi ilə layihələrinizi idarə edin, mütəxəssislərlə danışın və təsdiq verin.
            </p>

            <div className="space-y-3 pt-2">
              {appFeatures.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5 bg-[#121218] p-3 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{f.title}</div>
                      <div className="text-[11px] text-zinc-400">{f.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Titanium iPhone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[300px] h-[580px] bg-gradient-to-b from-[#1c1c24] to-[#0d0d12] rounded-[48px] p-4 shadow-[0_0_60px_rgba(139,92,246,0.3)] border-4 border-zinc-700">
              {/* Dynamic Island */}
              <div className="w-24 h-5 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              </div>

              {/* Mock App Screen Inside */}
              <div className="h-[490px] bg-[#09090B] rounded-[36px] p-4 flex flex-col justify-between border border-white/10 overflow-hidden">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                    <span className="font-bold text-white">Chai Studio App</span>
                    <span className="text-[10px] text-emerald-400">● Canlı</span>
                  </div>

                  <div className="bg-purple-600/20 p-3 rounded-2xl border border-purple-500/30">
                    <div className="text-[10px] text-purple-300 font-bold">AKTİV LAYİHƏ</div>
                    <div className="text-xs font-bold text-white mt-0.5">Fintech UI/UX v2</div>
                    <div className="text-[10px] text-zinc-400 mt-1">Status: İlk Versiya Təqdimatı (%75)</div>
                  </div>

                  <div className="bg-[#18181F] p-3 rounded-2xl border border-white/5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-[11px] font-bold text-white">Nicat Əliyev</span>
                    </div>
                    <div className="text-[10px] text-zinc-300">
                      "Yeni tünd mövzu ekranları əlavə olundu."
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-center">
                  <div className="text-[10px] text-zinc-400">App Store & Google Play</div>
                  <div className="text-xs font-bold text-purple-300 mt-0.5">Tezliklə Yükləyin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
