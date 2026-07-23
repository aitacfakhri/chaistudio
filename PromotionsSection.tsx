"use client";

import { useState } from "react";
import { Tag, Sparkles, Copy, Check, Gift } from "lucide-react";

export default function PromotionsSection() {
  const [copied, setCopied] = useState<string | null>(null);

  const promos = [
    {
      title: "İlk Sifariş Endirimi",
      code: "CHAI20",
      discount: "20% ENDİRİM",
      desc: "Platformada ilk layihənizi başladığınız zaman dərhal 20% qənaət edin.",
      highlight: true,
    },
    {
      title: "Promo Kodlar",
      code: "STARTUP30",
      discount: "30 AZN HƏDİYYƏ",
      desc: "Yeni startaplar üçün ilk brendinq və ya UI/UX sifarişinə 30 AZN bonus.",
      highlight: false,
    },
    {
      title: "Bayram Kampaniyaları",
      code: "BAYRAM15",
      discount: "15% ENDİRİM",
      desc: "Mövsümi bayram reklam və video montaj paketlərinə xüsusi endirim.",
      highlight: false,
    },
    {
      title: "Korporativ Təkliflər",
      code: "CORP2026",
      discount: "XÜSUSİ TARİF",
      desc: "Aylıq 3-dən çox sifariş verən korporativ şirkətlər üçün limitsiz üstünlüklər.",
      highlight: false,
    },
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <section className="py-24 bg-[#0e0e13]/60 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full purple-gradient-badge text-purple-300 text-xs font-semibold">
            <Gift className="w-3.5 h-3.5 text-purple-400" />
            <span>FÜRSƏTLƏR VƏ KAMPANİYALAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Xüsusi təkliflər və <span className="purple-glow-text">aktiv promo kodlar</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Promo kodu kopyalayın və layihəyə başlayarkən daxil edərək dərhal endirim qazanın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((p, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between border ${
                p.highlight ? "border-purple-500/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]" : "border-white/5"
              }`}
            >
              <div>
                <div className="text-[11px] font-bold text-purple-300 uppercase tracking-wider mb-2">
                  {p.title}
                </div>
                <div className="text-2xl font-black text-white mb-2">{p.discount}</div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-6">{p.desc}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono font-bold text-sm text-purple-300">{p.code}</span>
                <button
                  onClick={() => handleCopy(p.code)}
                  className="inline-flex items-center gap-1.5 bg-purple-600/20 hover:bg-purple-600/40 text-purple-200 border border-purple-500/30 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
                >
                  {copied === p.code ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kodu al</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
