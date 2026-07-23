"use client";

import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBriefModal: () => void;
}

export default function FinalCtaSection({ onOpenBriefModal }: FinalCtaSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Intense purple glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-purple-600/10 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-panel rounded-3xl p-10 sm:p-16 border border-purple-500/40 shadow-[0_0_50px_rgba(139,92,246,0.3)] relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>20% ENDİRİMLƏ İLK SİFARİŞİNİZİ VERİN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            İlk Layihənizi Başladın və <br />
            <span className="purple-glow-text">Biznesinizi Yeni Səviyyəyə Qaldırın.</span>
          </h2>

          <p className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Bugün layihə brifinizi göndərin. Yoxlanılmış ekspertlər 15 dəqiqə ərzində təklif versin, ödənişiniz isə 100% təhlükəsiz depozitdə qorunsun.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenBriefModal}
              className="glow-btn inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl font-bold text-base text-white cursor-pointer group"
            >
              <span>İlk Layihənizi Başladın</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Pul Geri Qaytarma Zəmanəti
            </span>
            <span>•</span>
            <span>Limitsiz Pulsuz Düzəlişlər</span>
          </div>
        </div>
      </div>
    </section>
  );
}
