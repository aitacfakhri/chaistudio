"use client";

import { useState } from "react";
import { CheckCircle2, Clock, FileText, Download, ShieldCheck, Sparkles } from "lucide-react";

export default function ProjectTrackingSection() {
  const statuses = [
    { name: "Beh Ödənildi", pct: 15, time: "Dərhal", desc: "Depozit vəsaiti bloklandı və qorunur" },
    { name: "Sifariş Qəbul Edildi", pct: 30, time: "10 dəq sonra", desc: "Mütəxəssis brifi təhlil etdi" },
    { name: "İş Hazırlanır", pct: 50, time: "24 saat", desc: "Dizayn eskizləri və prototip qurulur" },
    { name: "İlk Versiya", pct: 75, time: "48 saat", desc: "İlkin fayllar müştəriyə təqdim olundu" },
    { name: "Düzəliş", pct: 85, time: "Ehtiyac olduqda", desc: "Rəylər əsasında incə detallar tənzimlənir" },
    { name: "Tamamlandı", pct: 95, time: "Son təsdiq", desc: "Müştəri yekun işi qəbul etdi" },
    { name: "Təhvil Verildi", pct: 100, time: "Yekun", desc: "Fayllar və depozit ödənişi təhvil verildi" },
  ];

  const [activeStep, setActiveStep] = useState(3); // default "İlk Versiya"

  const current = statuses[activeStep];

  return (
    <section id="tracking" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-purple-400" />
            <span>CANLI İZLƏMƏ PANELI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layihənizin hər addımını <span className="purple-glow-text">real vaxtda</span> izləyin
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Mərhələlərin üzərinə klikləyərək interaktiv layihə izləmə sistemini sınaqdan keçirin.
          </p>
        </div>

        {/* Interactive Dashboard Frame */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-purple-500/30 shadow-2xl relative">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span>Layihə ID: #CS-89201</span>
                <span>•</span>
                <span className="text-purple-300">Fintech Mobil Tətbiq UI/UX Dizaynı</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                Mövcud Status: <span className="text-purple-400">{current.name}</span>
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-xs text-zinc-400">Ümumi Tərəqqi</div>
                <div className="text-xl font-black font-mono text-purple-300">{current.pct}%</div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center font-bold text-purple-400">
                {current.pct}%
              </div>
            </div>
          </div>

          {/* Animated Progress Bar */}
          <div className="my-8">
            <div className="w-full bg-zinc-800/80 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div
                className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 h-full rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                style={{ width: `${current.pct}%` }}
              />
            </div>
          </div>

          {/* 7 Status Interactive Pill Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {statuses.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl text-left text-xs transition-all cursor-pointer border ${
                  activeStep === idx
                    ? "bg-purple-600/30 border-purple-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    : idx < activeStep
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-300"
                    : "bg-white/5 border-white/5 text-zinc-400 hover:text-white"
                }`}
              >
                <div className="font-bold flex items-center justify-between">
                  <span>{item.name}</span>
                  {idx <= activeStep && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-[10px] text-zinc-500 mt-1">{item.pct}%</div>
              </button>
            ))}
          </div>

          {/* Live Deliverables Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="bg-[#121218] p-4 rounded-xl border border-white/5">
              <div className="text-xs text-zinc-400 mb-1">Mərhələ İzahı</div>
              <div className="text-sm font-semibold text-white">{current.desc}</div>
              <div className="text-[11px] text-purple-300 mt-2 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Təxmini Vaxt: {current.time}
              </div>
            </div>

            <div className="bg-[#121218] p-4 rounded-xl border border-white/5">
              <div className="text-xs text-zinc-400 mb-1">Təhvil Faylları</div>
              <div className="text-xs text-white space-y-1.5 mt-1">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    fintech_ui_kit_v2.fig
                  </span>
                  <span className="text-[10px] text-emerald-400">Hazırdır</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-400" />
                    brand_guidelines.pdf
                  </span>
                  <span className="text-[10px] text-purple-400">Yüklənir</span>
                </div>
              </div>
            </div>

            <div className="bg-[#121218] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-xs text-zinc-400 mb-1">Təhlükəsizlik Statusu</div>
                <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 mt-1">
                  <ShieldCheck className="w-4 h-4" /> Escrow Depoziti Aktivdir (₼ 1,200 AZN)
                </div>
              </div>
              <div className="text-[10px] text-zinc-500 mt-2">
                Yalnız siz təsdiqlədikdə ödəniş buraxılır.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
